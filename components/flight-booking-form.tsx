/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { CalendarDays, MapPin, Minus, Plus, Users } from "lucide-react";
import { format } from "date-fns";
import axios from "axios";

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

interface Airport {
  code: string;
  name: string;
  city: string;
}

interface AirportSelectorProps {
  value: Airport | null;
  onSelect: (airport: Airport) => void;
  placeholder: string;
  airports: Airport[];
}

function AirportSelector({
  value,
  onSelect,
  placeholder,
  airports,
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
          className="w-full justify-start text-left font-normal bg-white border-gray-200 hover:bg-gray-50 h-10"
        >
          <MapPin className="mr-2 h-4 w-4" />
          {value ? (
            <div className="flex items-center gap-2">
              <span className="font-medium">{value.code}</span>
              <span className="text-xs text-muted-foreground">
                {value.city}
              </span>
            </div>
          ) : (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="pb-3">
          <DrawerTitle className="text-lg">{placeholder}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <Input
            placeholder="Search airports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-3 h-9"
          />
          <div className="max-h-60 overflow-y-auto space-y-1">
            {filteredAirports.map((airport) => (
              <Button
                key={airport.code}
                variant="ghost"
                className="w-full justify-start text-left h-auto p-2"
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
          className="w-full justify-start text-left font-normal bg-white border-gray-200 hover:bg-gray-50 h-10"
        >
          <CalendarDays className="mr-2 h-4 w-4" />
          {date ? (
            <span className="text-sm">{format(date, "MMM dd, yyyy")}</span>
          ) : (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="pb-3">
          <DrawerTitle className="text-lg">{placeholder}</DrawerTitle>
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
            className="rounded-md border"
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
          className="w-full justify-start text-left font-normal bg-white border-gray-200 hover:bg-gray-50 h-10"
        >
          <Users className="mr-2 h-4 w-4 text-gray-500" />
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900 text-sm">
              {totalPassengers}{" "}
              {totalPassengers === 1 ? "Passenger" : "Passengers"}
            </span>
            <span className="text-xs text-gray-500">
              ({adults} Adult{adults !== 1 ? "s" : ""}
              {childPassengers > 0
                ? `, ${childPassengers} Child${
                    childPassengers !== 1 ? "ren" : ""
                  }`
                : ""}
              )
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="pb-3">
          <DrawerTitle className="text-lg">Select Passengers</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 space-y-4">
          {/* Adults */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-gray-900">Adults</span>
              <p className="text-xs text-gray-500">12+ years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => onAdultsChange(Math.max(1, adults - 1))}
                disabled={adults <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{adults}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => onAdultsChange(Math.min(9, adults + 1))}
                disabled={adults >= 9}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-medium text-gray-900">
                Children
              </span>
              <p className="text-xs text-gray-500">2-11 years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
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
                className="h-8 w-8 rounded-full"
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
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
  const [airports, setAirports] = React.useState<Airport[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showModal, setShowModal] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Load airports from JSON file
  React.useEffect(() => {
    const loadAirports = async () => {
      try {
        const response = await fetch("/airports.json");
        const airportsData = await response.json();

        // Convert the JSON structure to our Airport interface
        // Filter to only include airports with IATA codes (major airports)
        const airportMap = new Map<string, Airport>();

        Object.values(airportsData)
          .filter((airport: any) => airport.iata && airport.iata.length === 3)
          .forEach((airport: any) => {
            const airportData: Airport = {
              code: airport.iata,
              name: airport.name,
              city: airport.city,
            };

            // Only keep the first occurrence of each IATA code
            if (!airportMap.has(airport.iata)) {
              airportMap.set(airport.iata, airportData);
            }
          });

        const formattedAirports: Airport[] = Array.from(
          airportMap.values()
        ).sort((a, b) => a.city.localeCompare(b.city));

        setAirports(formattedAirports);
      } catch (error) {
        console.error("Failed to load airports:", error);
        // Fallback to empty array if loading fails
        setAirports([]);
      }
    };

    loadAirports();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const inputs = {
      tripType,
      fromAirport: fromAirport
        ? `${fromAirport.code} - ${fromAirport.name}, ${fromAirport.city}`
        : "",
      toAirport: toAirport
        ? `${toAirport.code} - ${toAirport.name}, ${toAirport.city}`
        : "",
      departureDate: departureDate ? format(departureDate, "MMM dd, yyyy") : "",
      returnDate: returnDate ? format(returnDate, "MMM dd, yyyy") : "",
      adults,
      children,
      travelClass,
      passengerName,
      email,
      mobile,
      additionalDetails,
    };

    axios({
      method: "POST",
      url: "https://formbold.com/s/9mNpP",
      data: inputs,
    })
      .then((r) => {
        if (r.status === 201) {
          console.log(r.status);
          setShowModal(true);
          // Reset form
          setTripType("roundtrip");
          setFromAirport(null);
          setToAirport(null);
          setDepartureDate(undefined);
          setReturnDate(undefined);
          setAdults(1);
          setChildren(0);
          setTravelClass("");
          setPassengerName("");
          setEmail("");
          setMobile("");
          setAdditionalDetails("");
        }
      })
      .catch((r) => {
        console.log(r);
        alert("There was an error submitting your request. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="reviews">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="btn-gold text-white rounded-full px-6 py-2 text-sm">
            Get a Quote
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[95vh] bg-white">
          <DrawerHeader className="border-b border-gray-100 pb-3">
            <p
              style={{ color: "#3B6095" }}
              className="text-xs tracking-wider uppercase mb-1"
            >
              Find the perfect flight for your journey
            </p>
            <DrawerTitle className="hidden"></DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4 overflow-y-auto bg-gray-50">
            <Card className="border-0 shadow-none bg-transparent mt-3">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Trip Type */}
                  <div className="bg-white p-4 border border-gray-100 rounded-lg">
                    <Label className="text-sm font-semibold text-gray-900 mb-3 block">
                      Trip Type
                    </Label>
                    <RadioGroup
                      value={tripType}
                      onValueChange={setTripType}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="roundtrip"
                          id="roundtrip"
                          className="border-blue-600 text-blue-600"
                        />
                        <Label
                          htmlFor="roundtrip"
                          className="text-sm text-gray-700 font-medium cursor-pointer"
                        >
                          Round Trip
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="oneway"
                          id="oneway"
                          className="border-blue-600 text-blue-600"
                        />
                        <Label
                          htmlFor="oneway"
                          className="text-sm text-gray-700 font-medium cursor-pointer"
                        >
                          One Way
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* From and To */}
                  <div className="bg-white p-4 border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="from"
                          className="text-sm font-semibold text-gray-900"
                        >
                          From
                        </Label>
                        <AirportSelector
                          value={fromAirport}
                          onSelect={setFromAirport}
                          placeholder="Select departure airport"
                          airports={airports}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="to"
                          className="text-sm font-semibold text-gray-900"
                        >
                          To
                        </Label>
                        <AirportSelector
                          value={toAirport}
                          onSelect={setToAirport}
                          placeholder="Select destination airport"
                          airports={airports}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="bg-white p-4 border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="departure"
                          className="text-sm font-semibold text-gray-900"
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
                        <div className="space-y-2">
                          <Label
                            htmlFor="return"
                            className="text-sm font-semibold text-gray-900"
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
                  <div className="bg-white p-4 border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="passengers"
                          className="text-sm font-semibold text-gray-900"
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
                      <div className="space-y-2">
                        <Label
                          htmlFor="class"
                          className="text-sm font-semibold text-gray-900"
                        >
                          Class
                        </Label>
                        <Select
                          value={travelClass}
                          onValueChange={setTravelClass}
                        >
                          <SelectTrigger className="bg-white border-gray-200 hover:bg-gray-50 h-10">
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
                  <div className="bg-white p-4 border border-gray-100 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-900"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={passengerName}
                          onChange={(e) => setPassengerName(e.target.value)}
                          className="bg-white border-gray-200 hover:border-gray-300 focus:border-blue-500 h-10"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-900"
                          >
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white border-gray-200 hover:border-gray-300 focus:border-blue-500 h-10"
                            required
                          />
                        </div>

                        <div className="space-y-1">
                          <Label
                            htmlFor="mobile"
                            className="text-sm font-medium text-gray-900"
                          >
                            Mobile Number *
                          </Label>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="Enter your mobile number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="bg-white border-gray-200 hover:border-gray-300 focus:border-blue-500 h-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label
                          htmlFor="details"
                          className="text-sm font-medium text-gray-900"
                        >
                          Additional Details
                        </Label>
                        <textarea
                          id="details"
                          placeholder="Any special requests, dietary requirements, or additional information..."
                          value={additionalDetails}
                          onChange={(e) => setAdditionalDetails(e.target.value)}
                          className="w-full min-h-[70px] px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                          rows={3}
                        />
                        <p className="text-xs text-gray-500">
                          Optional - Let us know about any special requirements
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      type="submit"
                      className="flex-1 btn-gold text-white rounded-full px-6 py-2 text-sm"
                      size="default"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request a Quote"}
                    </Button>
                    <DrawerClose asChild>
                      <Button
                        variant="outline"
                        className="px-6 py-2 text-sm rounded-full"
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
    </section>
  );
}
