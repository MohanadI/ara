"use client";

import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { geoPath } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
  Marker,
} from "react-simple-map";
import Image from "next/image";

interface GeoData {
  ISO3: string;
  "2017": number; // Adjust the type based on your actual data structure
}

const geoUrl = "./files/features.json";

const MapChart: React.FC = () => {
  const [data, setData] = useState<GeoData[]>([]);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 2 });

  useEffect(() => {
    csv("./files/vulnerability.csv").then((csvData) => {
      setData(csvData as unknown as GeoData[]);
    });
  }, []);

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position: { coordinates: any; zoom: number }) {
    setPosition(position);
  }

  return (
    <div className="relative border border-[#cbcbcb]">
      <div className="absolute left-2 top-5 bg-[#467c92] p-7 px-9">
        <div className="flex mb-2">
          <span className="bg-[#4D8094] p-2 rounded-full">
            <Image src="./location.svg" alt="location" height={24} width={24} />
          </span>
          <h2 className="p-[6px] text-lg text-center font-semibold text-white dark:text-white">
            Countries
          </h2>
        </div>

        <ul className="max-w-md pl-2 space-y-1 text-[#FFFFFFCC] text-base list-disc list-inside dark:text-gray-400">
          <li>UAE (HQ)</li>
          <li>KSA</li>
          <li>Qatar</li>
          <li>Oman</li>
          <li>Egypt</li>
          <li>Palestine</li>
          <li>Jordan</li>
          <li>New Zealand</li>
          <li>Australia</li>
        </ul>
      </div>
      <ComposableMap>
        <ZoomableGroup
          zoom={position.zoom}
          center={[position.coordinates[0], position.coordinates[1]]}
          onMoveEnd={handleMoveEnd}
        >
          <Sphere
            id="mySphere" // Add a unique id
            fill="#e8edf0" // Specify a fill color
            stroke="#e8edf0"
            strokeWidth={0.5}
          />
          <Graticule stroke="#e8edf0" strokeWidth={0.5} />
          {data.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isJordan = geo.properties.name === "Jordan";

                  const isSaudi = geo.properties.name === "Saudi Arabia";

                  const isOman = geo.properties.name === "Oman";

                  const isUae = geo.properties.name === "United Arab Emirates";

                  const isPalestine = geo.properties.name === "Israel";
                  const isWestBank = geo.properties.name === "West Bank";
                  const isEgypt = geo.properties.name === "Egypt";

                  const isGaza = geo.properties.name === "Gaza";

                  const isIraq = geo.properties.name === "Iraq";

                  const isQatar = geo.properties.name === "Qatar";

                  const isNewZealand = geo.properties.name === "New Zealand";

                  const isAustralia = geo.properties.name === "Australia";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={(coordinates) => {
                        console.log(coordinates);
                      }}
                      fill={
                        isJordan ||
                        isSaudi ||
                        isOman ||
                        isIraq ||
                        isUae ||
                        isPalestine ||
                        isWestBank ||
                        isGaza ||
                        isQatar ||
                        isAustralia ||
                        isNewZealand ||
                        isEgypt
                          ? "#005375"
                          : "#ced5dd" // Use the color scale for other countries
                      }
                      stroke="#E4E5E6"
                      strokeWidth={0.5}
                    />
                  );
                })
              }
            </Geographies>
          )}
          <Marker coordinates={[52.8859, 23.0792]}>
            <text
              x={-10}
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#FFFFFF"
              style={{ fontSize: "5px" }}
            >
              KSA
            </text>
          </Marker>
          <Marker coordinates={[57.01, 23.1792]}>
            <text
              x={-5}
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#FFFFFF"
              style={{ fontSize: "3px" }}
            >
              UAE
            </text>
          </Marker>
          <Marker coordinates={[58.01, 19.1992]}>
            <text
              x={-2}
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#FFFFFF"
              style={{ fontSize: "4px" }}
            >
              Oman
            </text>
          </Marker>
          <Marker coordinates={[32.01, 26.1992]}>
            <text
              x={-2}
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#FFFFFF"
              style={{ fontSize: "5px" }}
            >
              Egypt
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
      <div className="controls bg-white rounded  p-1 absolute right-4 bottom-4 flex flex-col">
        <button className="border-b text-[#005375]" onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button className="text-[#005375]" onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MapChart;
