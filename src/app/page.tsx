import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import Fleet from "@/components/sections/Fleet";
import Route from "@/components/sections/Route";
import Editorial from "@/components/sections/Editorial";
import WhyUs from "@/components/sections/WhyUs";
import BookingForm from "@/components/sections/BookingForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Fleet />
      <Route />
      <Editorial />
      <WhyUs />
      <BookingForm />
    </>
  );
}
