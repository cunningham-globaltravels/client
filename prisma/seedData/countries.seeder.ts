import { Continent } from '../../generated/prisma/enums';
import { PrismaClient } from '../../generated/prisma/client';
import 'dotenv/config';
import { fetchRestCountries, IRestCountry } from '../services/fetch-rest-countries.service';

const continentMap: Record<string, Continent> = {
  Africa: Continent.AFRICA,
  Europe: Continent.EUROPE,
  Asia: Continent.ASIA,
  Americas: Continent.NORTH_AMERICA,
  Oceania: Continent.OCEANIA,
  Antarctic: Continent.ANTARCTICA,
};

function mapCountry(country: IRestCountry) {
  if (!country.cca2 || !country.cca3) return null;

  const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : 'USD';

  const phoneCode =
    country.idd?.root && country.idd?.suffixes?.length ? `${country.idd.root}${country.idd.suffixes[0]}` : '';

  return {
    name: country.name.common,
    iso2: country.cca2,
    iso3: country.cca3,
    numericCode: country.ccn3,
    continent: continentMap[country.region] ?? Continent.ANTARCTICA,
    currencyCode,
    phoneCode,
    flagEmoji: country.flag,
  };
}

export async function seedCountries(prisma: PrismaClient) {
  const countries = await fetchRestCountries();

  for (const country of countries) {
    const mapped = mapCountry(country);
    if (!mapped) continue;

    await prisma.country.upsert({
      where: { iso2: mapped.iso2 },
      update: {},
      create: mapped,
    });
  }

  console.log(`🌍 Seeded ${countries.length} countries`);
}
