'use client';
import React, { useState } from 'react';
import type { TLanguageProps } from '@/types/default.type';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

const LanguageSelection = ({ languages }: { languages: TLanguageProps[] }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='ghost' role='combobox' aria-expanded={open} className='w-[200px] justify-between'>
          {/* {value ? languages.find((lang) => lang.value === value)?.name : languages[0].name} */}
          {value ? (
            <div className='flex items-center box-border text-[#051a37] cursor-pointer text-sm h-12 leading-10 rounded px-2 py-0'>
              <div className='lang-img-wrapper'>
                <i
                  className='lang-img-content'
                  style={{ backgroundPosition: languages.find((lang) => lang.value === value)?.position }}
                ></i>
              </div>
              <span className='text-ellipsis overflow-hidden whitespace-nowrap ml-2'>
                {languages.find((lang) => lang.value === value)?.name}
              </span>
            </div>
          ) : (
            <div className='flex items-center box-border text-[#051a37] cursor-pointer text-sm h-12 leading-10 rounded px-2 py-0 '>
              <div className='lang-img-wrapper'>
                <i className='lang-img-content' style={{ backgroundPosition: languages[0].position }}></i>
              </div>
              <span className='text-ellipsis overflow-hidden whitespace-nowrap ml-2'>{languages[0].name}</span>
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Select Language...' className='h-9' />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              <div className=' box-border h-[479px] max-h-[80vh] w-[596px] pt-4 rounded-br-lg rounded-bl-lg'>
                <div className='box-border h-full overflow-x-hidden overflow-y-auto pt-0 pb-6 px-4'>
                  <h5 className='text-[#051a37] text-sm font-bold tracking-[0px] leading-[18px] mx-0 my-2'>
                    All Languages
                  </h5>
                  <div className='grid grid-cols-[repeat(3,200px)] gap-[16px_12px]'>
                    {languages.map((language) => (
                      <CommandItem
                        key={language.value}
                        value={language.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);
                        }}
                      >
                        <div className='flex items-center box-border text-[#051a37] cursor-pointer text-xs h-12 leading-10 rounded px-2 py-0 hover:bg-gray-100'>
                          <div className='lang-img-wrapper'>
                            <i className='lang-img-content' style={{ backgroundPosition: language.position }}></i>
                          </div>
                          <span className='text-ellipsis overflow-hidden whitespace-nowrap ml-2'>{language.name}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </div>
                </div>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelection;
