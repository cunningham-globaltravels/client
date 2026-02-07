'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FlightDetailsProps } from '@/lib/types/flight-search/response-flight-search.type';
import { getStopValue } from '@/lib/helper/string-manipulator.helper';
import { ScrollArea } from '@/components/ui/scroll-area';
import FlightFilters from './_component/testing/FlightFilters';
import FlightProfileDetails from './_component/FlightProfileDetails';
import EmptyFlightsState from './_component/EmptyFlightsState';
import { flightFilterState } from '@/lib/types/flight-search/flight-search-parser';

interface IFlightResultsProps {
  flights: FlightDetailsProps[];
  onSelectFlight: (flightId: string) => void;
}
type filterStateType = 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc';

const FlightSearchResults: React.FC<IFlightResultsProps> = ({ flights, onSelectFlight }) => {
  const [filterState, setFilterState] = useState<flightFilterState>({
    priceRange: [0, Infinity],
    durationRange: [0, Infinity],
    selectedStops: [] as number[],
    selectedAirlines: [] as string[],
    refundableOnly: false,
  });
  const [sortBy, setSortBy] = useState<filterStateType>('price-asc');
  const hasAnyFlights = flights.length > 0;
  // Compute extremes and uniques
  const extremes = useMemo(() => {
    const prices = flights.map((f) => f.amount);
    const durations = flights.map((f) => f.total_duration);
    return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices), maxDuration: Math.max(...durations) };
  }, [flights]);
  const uniqueAirlines = useMemo(() => {
    const set = new Set<string>();
    flights.forEach((f) => {
      f.outbound.forEach((s) => set.add(s.airline_details.name));
    });
    return Array.from(set).sort();
  }, [flights]);
  const uniqueStops = useMemo(() => Array.from(new Set(flights.map((f) => getStopValue(f.outbound_stops)))), [flights]);

  const hasFiltersApplied =
    filterState.selectedStops.length > 0 ||
    filterState.selectedAirlines.length > 0 ||
    filterState.refundableOnly ||
    filterState.priceRange[0] !== extremes.minPrice ||
    filterState.priceRange[1] !== extremes.maxPrice ||
    filterState.durationRange[1] !== extremes.maxDuration;

  // Filtered and sorted flights
  const filteredFlights = useMemo(() => {
    const filtered = flights.filter((flight) => {
      const stopKey = getStopValue(flight.outbound_stops);
      const hasSelectedAirline =
        filterState.selectedAirlines.length === 0 ||
        filterState.selectedAirlines.some((al) => flight.outbound.some((s) => s.airline_details.name === al));
      const allRefundable = flight.outbound.every((s) => s.refundable);
      return (
        flight.amount >= filterState.priceRange[0] &&
        flight.amount <= filterState.priceRange[1] &&
        (filterState.selectedStops.length === 0 || filterState.selectedStops.includes(stopKey)) &&
        hasSelectedAirline &&
        flight.total_duration <= filterState.durationRange[1] &&
        (!filterState.refundableOnly || allRefundable)
      );
    });
    // Sort
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.amount - b.amount;
        case 'price-desc':
          return b.amount - a.amount;
        case 'duration-asc':
          return a.total_duration - b.total_duration;
        case 'duration-desc':
          return b.total_duration - a.total_duration;
        default:
          return 0;
      }
    });
  }, [flights, filterState, sortBy]);

  const updateFilterState = useCallback((newState: Partial<typeof filterState>) => {
    setFilterState((prev) => ({ ...prev, ...newState }));
  }, []);
  const handlePriceChange = useCallback(
    (value: number[]) => {
      updateFilterState({ priceRange: value });
    },
    [updateFilterState],
  );
  const handleDurationChange = useCallback(
    (value: number[]) => {
      updateFilterState({ durationRange: value });
    },
    [updateFilterState],
  );
  const toggleStop = useCallback(
    (stop: number) => {
      updateFilterState({
        selectedStops: filterState.selectedStops.includes(stop)
          ? filterState.selectedStops.filter((s) => s !== stop)
          : [...filterState.selectedStops, stop],
      });
    },
    [filterState.selectedStops, updateFilterState],
  );
  const toggleAirline = useCallback(
    (airline: string) => {
      updateFilterState({
        selectedAirlines: filterState.selectedAirlines.includes(airline)
          ? filterState.selectedAirlines.filter((a) => a !== airline)
          : [...filterState.selectedAirlines, airline],
      });
    },
    [filterState.selectedAirlines, updateFilterState],
  );
  const setRefundableOnly = useCallback(
    (value: boolean) => {
      updateFilterState({ refundableOnly: value });
    },
    [updateFilterState],
  );

  const sortOptions = [
    { value: 'price-asc' as const, label: 'Price: Lowest first' },
    { value: 'price-desc' as const, label: 'Price: Highest first' },
    { value: 'duration-asc' as const, label: 'Duration: Shortest first' },
    { value: 'duration-desc' as const, label: 'Duration: Longest first' },
  ];

  return (
    <div className='container mx-auto px-4 py-8 lg:px-8 lg:py-12'>
      {hasAnyFlights ? (
        <div className='grid lg:grid-cols-[280px_1fr] gap-8 max-w-7xl mx-auto'>
          {/* Filters - Sticky sidebar on desktop */}
          <motion.aside
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto order-2 lg:order-1'
          >
            <ScrollArea className='lg:h-[calc(100vh-12rem)]'>
              <div className='lg:w-72 space-y-1 lg:space-y-4'>
                <div className='p-4 border rounded-lg shadow-2xl bg-white'>
                  <h3 className='font-semibold text-lg mb-6 lg:mb-4'>Filters</h3>
                  <FlightFilters
                    filterState={filterState}
                    onPriceChange={handlePriceChange}
                    onDurationChange={handleDurationChange}
                    toggleStop={toggleStop}
                    toggleAirline={toggleAirline}
                    setRefundableOnly={setRefundableOnly}
                    uniqueAirlines={uniqueAirlines}
                    uniqueStops={uniqueStops}
                    minPrice={extremes.minPrice}
                    maxPrice={extremes.maxPrice}
                    maxDuration={extremes.maxDuration}
                  />
                </div>
              </div>
            </ScrollArea>
          </motion.aside>
          {/* Results */}
          <motion.main className='order-1 lg:order-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
              <div className='text-2xl font-bold'>
                {filteredFlights.length} {filteredFlights.length === 1 ? 'flight' : 'flights'} found
              </div>
              <Select value={sortBy} onValueChange={(value: filterStateType) => setSortBy(value)}>
                <SelectTrigger className='w-full sm:w-56 bg-white'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <AnimatePresence>
              {filteredFlights.length === 0 ? (
                <EmptyFlightsState
                  hasFiltersApplied={hasFiltersApplied}
                  onClearFilters={() =>
                    updateFilterState({
                      priceRange: [extremes.minPrice, extremes.maxPrice],
                      durationRange: [0, extremes.maxDuration],
                      selectedStops: [],
                      selectedAirlines: [],
                      refundableOnly: false,
                    })
                  }
                />
              ) : (
                <div className='grid gap-6'>
                  <AnimatePresence>
                    {filteredFlights.map((flight) => (
                      <FlightProfileDetails key={flight.id} flight={flight} onSelect={onSelectFlight} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </AnimatePresence>
          </motion.main>
        </div>
      ) : (
        <EmptyFlightsState hasFiltersApplied={false} />
      )}
    </div>
  );
};

export default FlightSearchResults;
