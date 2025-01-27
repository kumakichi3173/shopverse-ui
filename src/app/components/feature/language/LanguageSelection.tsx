/*
 * Copyright (c) 2025 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */
"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check } from "lucide-react"
import { languageOptions } from "@/data/languageOptions"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

export default function LanguageSelection() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("English")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button 
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {value
                        ? languageOptions.find((language) => language.value === value)?.label
                        : "Select language..."}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search Language..." />
                    <CommandList>
                        <CommandEmpty>No Language found.</CommandEmpty>
                        <CommandGroup>
                            {languageOptions.map((language) => (
                                <CommandItem
                                    key={language.value}
                                    value={language.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {language.label} - {language.value}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === language.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}