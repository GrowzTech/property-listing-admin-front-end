import { useState, useRef } from "react";
import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home } from "lucide-react";
import MapModal from "./MapModal";
import Editor from "./Editor";
import Quill from "quill/core";

const BasicInfo = () => {
  const [address, setAddress] = useState("");
  const [mapOpen, setMapOpen] = useState(false);
  const [description, setDescription] = useState("");
  const editorRef = useRef<Quill>(null);

  const handleMapSelect = async (location: { lat: number; lng: number }) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else {
        setAddress(`Lat: ${location.lat}, Lng: ${location.lng}`);
      }
    } catch (error) {
      setAddress(`Lat: ${location.lat}, Lng: ${location.lng}`);
    }
    setMapOpen(false);
  };

  const handleDescriptionChange = (
    delta: any,
    oldContents: any,
    source: any
  ) => {
    if (editorRef.current) {
      const text = editorRef.current.getText();
      setDescription(text);
    }
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
          placeholder="e.g., Luxury Oceanfront Villa with Private Beach Access"
          type="text"
        />

        {/* Description with Quill Editor */}
        <div className="flex flex-col gap-2">
          <Label className="text-[#333C4C] font-medium text-[14px]">
            Description <span className="text-red-500">*</span>
          </Label>
          <div className="border border-gray-300 rounded-md">
            <Editor
              ref={editorRef}
              placeholder="Provide a detailed description of the property..."
              onTextChange={handleDescriptionChange}
              defaultValue={description}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Price Amount"
            isRequired
            className="flex-1 w-1/2"
            placeholder="Enter price"
            type="text"
          />
          <div className="w-1/3 flex-col items-center">
            <Label className="text-[#333C4C] font-medium text-[14px]">
              Status*
            </Label>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <Input
                  id="available"
                  type="radio"
                  name="status"
                  value="available"
                  defaultChecked
                  className="size-5"
                />
                <Label htmlFor="available">Available</Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="pending"
                  type="radio"
                  name="status"
                  value="pending"
                  className="size-5"
                />
                <Label htmlFor="pending">Pending</Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="sold"
                  type="radio"
                  name="status"
                  value="sold"
                  className="size-5"
                />
                <Label htmlFor="sold">Sold</Label>
              </div>
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
