import { useEffect, useState } from "react";
import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Ruler } from "lucide-react";
import { Property } from "@/lib/features/property/type";

const PropertySpecs = ({
  onChange,
}: {
  onChange: (data: Partial<Property>) => void;
}) => {
  const [acreage, setAcreage] = useState("");
  const [parcelSize, setParcelSize] = useState("");
  const [state, setState] = useState("");
  const [gps, setGps] = useState("");
  const [zip, setZip] = useState("");
  const [parcelNumber, setParcelNumber] = useState("");
  const [currentZoning, setCurrentZoning] = useState("");
  const [conveyance, setConveyance] = useState("");
  const [generalElevation, setGeneralElevation] = useState("");
  const [taxes, setTaxes] = useState("");
  const [sewer, setSewer] = useState("");
  const [city, setCity] = useState("");
  const [access, setAccess] = useState("");
  const [terrain, setTerrain] = useState("");
  const [hoaFee, setHoaFee] = useState("");
  const [water, setWater] = useState("");
  const [phone, setPhone] = useState("");
  const [power, setPower] = useState("");

  useEffect(() => {
    onChange({
      acreage: Number(acreage),
      parcel_size: Number(parcelSize),
      state,
      gps: Number(gps),
      zip: Number(zip),
      parcel_number: String(parcelNumber),
      current_zoning: currentZoning,
      conveyance,
      general_elevation: generalElevation,
      taxes: Number(taxes),
      sewer,
      city,
      access,
      terrain,
      hoa_fee: Number(hoaFee),
      water,
      phone,
      power,
      area_size: Number(acreage), // duplicate of acreage
      area_unit: "sqm", // assume static for now
    });
  }, [
    acreage,
    parcelSize,
    state,
    gps,
    zip,
    parcelNumber,
    currentZoning,
    conveyance,
    generalElevation,
    taxes,
    sewer,
    city,
    access,
    terrain,
    hoaFee,
    water,
    phone,
    power,
  ]);

  return (
    <FormWrapper
      title="More Details"
      color="bg-[#ECFDF5]"
      description="Enter the size and layout details"
      icon={<Ruler size={14} color={"#E1C000"} />}
    >
      <div className="flex flex-col gap-6 px-6 w-full">
        <div className="flex gap-4">
          <TextInput
            label="Acreage"
            value={acreage}
            onChange={(e) => setAcreage(e.target.value)}
          />
          <TextInput
            label="Parcel Size"
            value={parcelSize}
            onChange={(e) => setParcelSize(e.target.value)}
          />
          <TextInput
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <TextInput
            label="GPS"
            value={gps}
            onChange={(e) => setGps(e.target.value)}
          />
          <TextInput
            label="Zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <TextInput
            label="Parcel Number"
            value={parcelNumber}
            onChange={(e) => setParcelNumber(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <TextInput
            label="Current Zoning"
            value={currentZoning}
            onChange={(e) => setCurrentZoning(e.target.value)}
          />
          <TextInput
            label="Conveyance"
            value={conveyance}
            onChange={(e) => setConveyance(e.target.value)}
          />
          <TextInput
            label="General Elevation"
            value={generalElevation}
            onChange={(e) => setGeneralElevation(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <TextInput
            label="Taxes"
            value={taxes}
            onChange={(e) => setTaxes(e.target.value)}
          />
          <TextInput
            label="Sewer"
            value={sewer}
            onChange={(e) => setSewer(e.target.value)}
          />
          <TextInput
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <TextInput
            label="Access"
            value={access}
            onChange={(e) => setAccess(e.target.value)}
          />
          <TextInput
            label="Terrain"
            value={terrain}
            onChange={(e) => setTerrain(e.target.value)}
          />
          <TextInput
            label="HOA Fee"
            value={hoaFee}
            onChange={(e) => setHoaFee(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <TextInput
            label="Water"
            value={water}
            onChange={(e) => setWater(e.target.value)}
          />
          <TextInput
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextInput
            label="Power"
            value={power}
            onChange={(e) => setPower(e.target.value)}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default PropertySpecs;
