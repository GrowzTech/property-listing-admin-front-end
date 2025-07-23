import { useEffect, useState } from "react";
import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home } from "lucide-react";
import MapModal from "./MapModal";
import { Coordinate, Property } from "@/lib/features/property/type";

const BasicInfo = ({
  onChange,
}: {
  onChange: (data: Partial<Property>) => void;
}) => {
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("available");
  const [mapOpen, setMapOpen] = useState(false);
  const [coordinate, setCoordinate] = useState<Coordinate>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange({
      title,
      description,
      price: Number(price),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      status: status as any,
      location: coordinate,
    });
  }, [title, description, price, status, address]);

  const handleMapSelect = async (location: { lat: number; lng: number }) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBpq49uxgcR1hSne0eaHvhBQ66HuMNsBgs`
      );
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else {
        setAddress(`Lat: ${location.lat}, Lng: ${location.lng}`);
      }
      setCoordinate({ longitude: location.lng, latitude: location.lat });
    } catch (error) {
      setAddress(`Lat: ${location.lat}, Lng: ${location.lng}`);
    }
    setMapOpen(false);
  };

  return (
    <FormWrapper
      title="Basic Information"
      color="bg-[#ECFEFF]"
      description="Enter the fundamental details about the property"
      icon={<Home size={14} color={"#1D4ED8"} />}
    >
      <div className="flex flex-col gap-6 px-6 w-full">
        <TextInput
          label="Property Name"
          isRequired
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Luxury Oceanfront Villa"
          type="text"
        />
        <TextInput
          label="Description"
          isRequired
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide a detailed description..."
          type="text"
        />
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Price Amount"
            isRequired
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="flex-1 w-1/2"
            placeholder="Enter price"
            type="text"
          />
          <div className="w-1/3 flex-col items-center">
            <Label className="text-[#333C4C] font-medium text-[14px]">
              Status*
            </Label>
            <div className="flex items-center gap-4 mt-3">
              {["available", "pending", "sold"].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <Input
                    id={s}
                    type="radio"
                    name="status"
                    value={s}
                    checked={status === s}
                    onChange={() => setStatus(s)}
                    className="size-5"
                  />
                  <Label htmlFor={s}>{s[0].toUpperCase() + s.slice(1)}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TextInput
          label="Full Address"
          isRequired
          placeholder="Click here to open the map"
          type="text"
          value={address}
          onFocus={() => setMapOpen(true)}
          readOnly
        />
        <MapModal
          open={mapOpen}
          onClose={() => setMapOpen(false)}
          onSelect={handleMapSelect}
        />
      </div>
    </FormWrapper>
  );
};

export default BasicInfo;
