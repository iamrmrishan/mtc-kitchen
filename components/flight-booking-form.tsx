"use client";

import * as React from "react";
import { CalendarDays, MapPin, Minus, Plus, Users } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock airport data
const airports = [
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
  },
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
  },
  { code: "ORD", name: "O'Hare International Airport", city: "Chicago" },
  { code: "MIA", name: "Miami International Airport", city: "Miami" },
  {
    code: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
  },
  {
    code: "SEA",
    name: "Seattle-Tacoma International Airport",
    city: "Seattle",
  },
  { code: "DEN", name: "Denver International Airport", city: "Denver" },
  {
    code: "ATL",
    name: "Hartsfield-Jackson Atlanta International Airport",
    city: "Atlanta",
  },
  { code: "BOS", name: "Logan International Airport", city: "Boston" },
  { code: "LAS", name: "McCarran International Airport", city: "Las Vegas" },
  {
    code: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    city: "Phoenix",
  },
  {
    code: "IAH",
    name: "George Bush Intercontinental Airport",
    city: "Houston",
  },
];

interface Airport {
  code: string;
  name: string;
  city: string;
}

interface AirportSelectorProps {
  value: Airport | null;
  onSelect: (airport: Airport) => void;
  placeholder: string;
}

function AirportSelector({
  value,
  onSelect,
  placeholder,
}: AirportSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filteredAirports = airports.filter(
    (airport) =>
      airport.name.toLowerCase().includes(search.toLowerCase()) ||
      airport.city.toLowerCase().includes(search.toLowerCase()) ||
      airport.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal bg-white border-gray-200 hover:bg-gray-50 h-12"
        >
          <MapPin className="mr-2 h-4 w-4" />
          {value ? (
            <div className="flex flex-col">
              <span className="font-medium">{value.code}</span>
              <span className="text-xs text-muted-foreground">
                {value.city}
              </span>
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{placeholder}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <Input
            placeholder="Search airports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />
          <div className="max-h-60 overflow-y-auto space-y-2">
            {filteredAirports.map((airport) => (
              <Button
                key={airport.code}
                variant="ghost"
                className="w-full justify-start text-left h-auto p-3"
                onClick={() => {
                  onSelect(airport);
                  setOpen(false);
                  setSearch("");
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{airport.code}</span>
                    <span className="text-sm text-muted-foreground">
                      {airport.city}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground text-left">
                    {airport.name}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface DateSelectorProps {
  date: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  placeholder: string;
}

function DateSelector({ date, onSelect, placeholder }: DateSelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal bg-white border-gray-200 hover:bg-gray-50 h-12"
        >
          <CalendarDays className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{placeholder}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              onSelect(selectedDate);
              setOpen(false);
            }}
            disabled={(date) => date < new Date()}
            initialFocus
            required={false}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface PassengerSelectorProps {
  adults: number;
  childPassengers: number;
  onAdultsChange: (count: number) => void;
  onChildPassengersChange: (count: number) => void;
}

function PassengerSelector({
  adults,
  childPassengers,
  onAdultsChange,
  onChildPassengersChange,
}: PassengerSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const totalPassengers = adults + childPassengers;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal bg-white border-gray-200 hover:bg-gray-50"
        >
          <Users className="mr-2 h-4 w-4 text-gray-500" />
          <div className="flex flex-col">
            <span className="font-medium text-gray-900">
              {totalPassengers}{" "}
              {totalPassengers === 1 ? "Passenger" : "Passengers"}
            </span>
            <span className="text-xs text-gray-500">
              {adults} Adult{adults !== 1 ? "s" : ""}
              {childPassengers > 0
                ? `, ${childPassengers} Child${
                    childPassengers !== 1 ? "ren" : ""
                  }`
                : ""}
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="pb-4">
          <DrawerTitle className="text-xl font-semibold">
            Select Passengers
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-6 space-y-6">
          {/* Adults */}
          <div className="flex items-center justify-between py-3">
            <div>
              <span className="text-base font-medium text-gray-900">
                Adults
              </span>
              <p className="text-sm text-gray-500">12+ years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-300 bg-transparent"
                onClick={() => onAdultsChange(Math.max(1, adults - 1))}
                disabled={adults <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{adults}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-300 bg-transparent"
                onClick={() => onAdultsChange(Math.min(9, adults + 1))}
                disabled={adults >= 9}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between py-3">
            <div>
              <span className="text-base font-medium text-gray-900">
                Children
              </span>
              <p className="text-sm text-gray-500">2-11 years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-300 bg-transparent"
                onClick={() =>
                  onChildPassengersChange(Math.max(0, childPassengers - 1))
                }
                disabled={childPassengers <= 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">
                {childPassengers}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-300 bg-transparent"
                onClick={() =>
                  onChildPassengersChange(Math.min(9, childPassengers + 1))
                }
                disabled={childPassengers >= 9}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
            onClick={() => setOpen(false)}
          >
            Done
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function FlightBookingForm() {
  const [tripType, setTripType] = React.useState("roundtrip");
  const [fromAirport, setFromAirport] = React.useState<Airport | null>(null);
  const [toAirport, setToAirport] = React.useState<Airport | null>(null);
  const [departureDate, setDepartureDate] = React.useState<Date | undefined>(
    undefined
  );
  const [returnDate, setReturnDate] = React.useState<Date | undefined>(
    undefined
  );
  const [adults, setAdults] = React.useState(1);
  const [children, setChildren] = React.useState(0);
  const [travelClass, setTravelClass] = React.useState("");
  const [passengerName, setPassengerName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [additionalDetails, setAdditionalDetails] = React.useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({
      tripType,
      fromAirport,
      toAirport,
      departureDate,
      returnDate,
      adults,
      children,
      travelClass,
      passengerName,
      email,
      mobile,
      additionalDetails,
    });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
          <Button
              className="btn-gold text-white rounded-full px-6 py-2 text-sm"
            >
              Check Flights
            </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[95vh] bg-white">
        <DrawerHeader className="border-b border-gray-100 pb-4">
          <DrawerTitle className="text-2xl font-bold text-center text-gray-900">
            Book Your Flight
          </DrawerTitle>
            <p
            style={{ color: "#3B6095" }}
            className="text-xs tracking-wider uppercase mb-2"
          >
            Find the perfect flight for your journey
          </p>
        </DrawerHeader>
        <div className="px-6 pb-6 overflow-y-auto bg-gray-50">
          <Card className="border-0 shadow-none bg-transparent mt-4">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Trip Type */}
                <div className="bg-white p-6 border border-gray-100">
                  <Label className="text-base font-semibold text-gray-900 mb-4 block">
                    Trip Type
                  </Label>
                  <RadioGroup
                    value={tripType}
                    onValueChange={setTripType}
                    className="flex gap-8"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value="roundtrip"
                        id="roundtrip"
                        className="border-blue-600 text-blue-600"
                      />
                      <Label
                        htmlFor="roundtrip"
                        className="text-gray-700 font-medium cursor-pointer"
                      >
                        Round Trip
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value="oneway"
                        id="oneway"
                        className="border-blue-600 text-blue-600"
                      />
                      <Label
                        htmlFor="oneway"
                        className="text-gray-700 font-medium cursor-pointer"
                      >
                        One Way
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* From and To */}
                <div className="bg-white p-6 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="from"
                        className="text-base font-semibold text-gray-900"
                      >
                        From
                      </Label>
                      <AirportSelector
                        value={fromAirport}
                        onSelect={setFromAirport}
                        placeholder="Select departure airport"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="to"
                        className="text-base font-semibold text-gray-900"
                      >
                        To
                      </Label>
                      <AirportSelector
                        value={toAirport}
                        onSelect={setToAirport}
                        placeholder="Select destination airport"
                      />
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="bg-white p-6 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="departure"
                        className="text-base font-semibold text-gray-900"
                      >
                        Departure Date
                      </Label>
                      <DateSelector
                        date={departureDate}
                        onSelect={setDepartureDate}
                        placeholder="Select departure date"
                      />
                    </div>
                    {tripType === "roundtrip" && (
                      <div className="space-y-3">
                        <Label
                          htmlFor="return"
                          className="text-base font-semibold text-gray-900"
                        >
                          Return Date
                        </Label>
                        <DateSelector
                          date={returnDate}
                          onSelect={setReturnDate}
                          placeholder="Select return date"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Passengers and Class */}
                <div className="bg-white p-6 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="passengers"
                        className="text-base font-semibold text-gray-900"
                      >
                        Passengers
                      </Label>
                      <PassengerSelector
                        adults={adults}
                        childPassengers={children}
                        onAdultsChange={setAdults}
                        onChildPassengersChange={setChildren}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="class"
                        className="text-base font-semibold text-gray-900"
                      >
                        Class
                      </Label>
                      <Select
                        value={travelClass}
                        onValueChange={setTravelClass}
                      >
                        <SelectTrigger className="bg-white border-gray-200 hover:bg-gray-50">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="premium-economy">
                            Premium Economy
                          </SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="first">First Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        className="bg-white border-gray-200 hover:border-gray-300 focus:border-blue-500 h-12"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-base font-medium text-gray-900"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white border-gray-200 hover:border-gray-300 focus:border-blue-500 h-12"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="mobile"
                          className="text-base font-medium text-gray-900"
                        >
                          Mobile Number *
                        </Label>
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="Enter your mobile number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="bg-white border-gray-200 hover:border-gray-300 focus:border-blue-500 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="details"
                        className="text-base font-medium text-gray-900"
                      >
                        Additional Details
                      </Label>
                      <textarea
                        id="details"
                        placeholder="Any special requests, dietary requirements, or additional information..."
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        className="w-full min-h-[100px] px-3 py-2 bg-white border border-gray-200 rounded-md hover:border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                        rows={4}
                      />
                      <p className="text-sm text-gray-500">
                        Optional - Let us know about any special requirements
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="btn-gold text-white rounded-full px-6 py-2 text-sm"
                    size="lg"
                  >
                    Search Flights
                  </Button>
                  <DrawerClose asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className=" rounded-full px-6 py-2 text-sm"
                    >
                      Cancel
                    </Button>
                  </DrawerClose>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
