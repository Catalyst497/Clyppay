import React, { useState } from "react";
import { Command, CommandDialog, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/shared/shadcn/command";
import bitcoin from "@/assets/icons/bitcoin.svg";
import cosmos from "@/assets/icons/cosmos.svg";
import etherum from "@/assets/icons/etherum.svg";

const arr = [
    {
        logo: bitcoin,
        name: "Bitcoin",
        symbol: "BTC",
        balance: 2.5,
    },
    {
        logo: etherum,
        name: "Ethereum",
        symbol: "ETH",
        balance: 10,
    },
    {
        name: "Cosmos",
        logo: cosmos,
        symbol: "ATOM", // Updated to "ATOM" as the symbol for Cosmos
        balance: 2.5,
    },
];

function Money() {
    const [value, setValue] = useState("");

    return (
        <CommandDialog isOpen={true} onOpenChange={() => {}}>
            <div className="flex w-full items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Wallets</h2>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Add new
                </button>
            </div>
            <Command>
                <CommandInput placeholder="Search cryptocurrency..." />
                <CommandEmpty>No cryptocurrency found.</CommandEmpty>
                <CommandGroup>
                    {arr.map((x) => (
                        <CommandItem
                            key={x.name}
                            value={x.name}
                            onSelect={(currentValue) => {
                                setValue(currentValue);
                            }}
                        >
                            <div className="flex items-center">
                                <img src={x.logo} alt={x.name} className="w-8 h-8 mr-3" />
                                <div>
                                    <span className="font-medium">{x.name}</span>
                                    <span className="text-sm text-gray-500 ml-2">{x.symbol}</span>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <span className="text-sm">{x.balance}</span>
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </Command>
        </CommandDialog>
    );
}

export default Money;
