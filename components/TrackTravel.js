import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "../lib/tailwind";
import { Button } from "./UI/Button";
import TrackTravelBtn from "./TrackTravelBtn";
import CarQuestionForm from "./CarQuestionForm";
import BikeQuestionForm from "./BikeQuestionForm";
import FlightQuestionForm from "./FlightQuestionForm";
import PublicTransportForm from "./PublicTransportForm";
import { useTrackActions } from "../context/actions/track_actions";
import { useTrackContext } from "../context/providers/TrackProvider";
import { RESET_ACTIVITY } from "../context/constants/track_constants";

const CAR = "CAR";
const PUBLIC = "PUBLIC";
const BIKE = "BIKE";
const FLIGHT = "FLIGHT";
export default function TrackTravel() {
  const [errMsg, setErrMsg] = useState("");
  const { addTravelActivity } = useTrackActions();
  const { state, dispatch } = useTrackContext();
  const [mode, setMode] = useState(CAR);
  const [publicTransport, setPublicTransport] = useState({
    distance: "",
    transportMode: "",
    unit: "",
  });
  const [flight, setFlight] = useState({
    trip: "",
    distance: "",
  });

  const [detail, setDetail] = useState({
    size: "",
    fuelType: "",
    value: "",
    unit: "",
    period: "monthly",
  });
  console.log(detail, flight, publicTransport, mode);
  const setSize = (size) => {
    setDetail({ ...detail, size });
  };

  const setFuelType = (fuelType) => {
    setDetail({ ...detail, fuelType });
  };
  const setValue = (value) => {
    setDetail({ ...detail, value });
  };
  const setUnit = (unit) => {
    setDetail({ ...detail, unit });
  };
  const setFlightValue = (field, value) => {
    setFlight({
      ...flight,
      [field]: value,
    });
  };

  const setPublicTransportValue = (field, value) => {
    setPublicTransport({
      ...publicTransport,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (mode === CAR) {
      if (
        detail.fuelType &&
        detail.size &&
        detail.value &&
        detail.unit &&
        detail.period
      ) {
        addTravelActivity({ car: detail });
        setDetail({
          size: "",
          fuelType: "",
          value: "",
          period: "monthly",
          unit: "",
        });
        setErrMsg("");
      } else {
        setErrMsg("All field must be filled");
        return;
      }
    }
    if (mode === BIKE) {
      if (detail.size && detail.value && detail.unit && detail.period) {
        addTravelActivity({
          bike: {
            size: detail.size,
            unit: detail.unit,
            period: detail.period,
            value: detail.value,
          },
        });
        setDetail({
          size: "",
          fuelType: "",
          value: "",
          period: "monthly",
          unit: "",
        });
        setErrMsg("");
      } else {
        setErrMsg("All field must be filled");
        return;
      }
    }
    if (mode === PUBLIC) {
      if (
        publicTransport.distance &&
        publicTransport.transportMode &&
        publicTransport.unit
      ) {
        addTravelActivity({
          publicTransport,
        });
        setPublicTransport({
          distance: "",
          transportMode: "",
          unit: "",
        });
        setErrMsg("");
      } else {
        setErrMsg("All field must be filled");
        return;
      }
    }
    if (mode === FLIGHT) {
      if (flight.distance && flight.trip) {
        addTravelActivity({
          flight,
        });
        setFlight({
          distance: "",
          trip: "",
        });
        setErrMsg("");
      } else {
        setErrMsg("All field must be filled");
        return;
      }
    }
  };

  useEffect(() => {
    if (state.activityAdded) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: RESET_ACTIVITY });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.activityAdded]);
  return (
    <ScrollView>
      <View style={tw`flex gap-2 p-5 pb-8`}>
        <Text style={tw`font-semibold text-base text-dark mb-2`}>
          Select your travel mode
        </Text>
        <View style={tw`flex flex-row justify-center gap-x-2`}>
          <TrackTravelBtn mode={CAR} currentMode={mode} setMode={setMode} />
          <TrackTravelBtn mode={BIKE} currentMode={mode} setMode={setMode} />
          <TrackTravelBtn mode={FLIGHT} currentMode={mode} setMode={setMode} />
          <TrackTravelBtn mode={PUBLIC} currentMode={mode} setMode={setMode} />
        </View>
        <View style={tw`pt-5 pb-3`}>
          {mode === BIKE && (
            <BikeQuestionForm
              setPeriod={null}
              setSize={setSize}
              setUnit={setUnit}
              setValue={setValue}
              value={detail.value}
              period={detail.period}
              unit={detail.unit}
              size={detail.size}
              allowPeriod={false}
            />
          )}
          {mode === CAR && (
            <CarQuestionForm
              setFuelType={setFuelType}
              setPeriod={null}
              setSize={setSize}
              setUnit={setUnit}
              setValue={setValue}
              value={detail.value}
              period={detail.period}
              unit={detail.unit}
              fuelType={detail.fuelType}
              size={detail.size}
              allowPeriod={false}
            />
          )}
          {mode === FLIGHT && (
            <FlightQuestionForm
              setValue={setFlightValue}
              trip={flight.trip}
              distance={flight.distance}
            />
          )}
          {mode === PUBLIC && (
            <PublicTransportForm
              setValue={setPublicTransportValue}
              distance={publicTransport.distance}
              transportMode={publicTransport.transportMode}
              unit={publicTransport.unit}
            />
          )}
        </View>
        <Text style={tw`text-red-500 py-2 `}>{errMsg}</Text>
        {state.activityAdded && (
          <Text style={tw`mt-1 text-sm text-green-500`}>Activity added!</Text>
        )}
        <View style={tw`w-full flex flex-row justify-end py-4`}>
          <View style={tw` max-w-2/3`}>
            <Button
              style={tw`text-[9px] px-8`}
              height="38"
              text={"Add acttivity"}
              icon={"add-circle-outline"}
              isLoading={state.addingActivity}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
