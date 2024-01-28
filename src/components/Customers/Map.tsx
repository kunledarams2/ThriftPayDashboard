import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import mapdata from "./mapdata";
import { geoCentroid } from "d3-geo";
import styles from "./userdistribution.module.css";
import { Tooltip } from "react-tooltip";

const geoUrl =
  "http://code.highcharts.com/mapdata/countries/ng/ng-all.topo.json";

interface Props {
  setTooltipContent: any;
}

const Map = ({ setTooltipContent }: Props) => {
  const stateData = [
    {
      name: "Rivers",
      latitude: 4.9979,
      longitude: 6.81969,
      users: 10,
    },
    {
      name: "Federal Capital Territory",
      latitude: 8.78852,
      longitude: 7.18889,
      users: 30,
    },
    {
      name: "Ondo",
      latitude: 7.1444,
      longitude: 5.19165,
      users: 15,
    },
    {
      latitude: 10.3294,
      longitude: 7.43906,
      name: "Kaduna",
      users: 30,
    },
    {
      latitude: 8.189690000000001,
      longitude: 3.61681,
      name: "Oyo",
      users: 30,
    },
    {
      latitude: 6.43313,
      longitude: 3.52478,
      name: "Lagos",
      users: 3000,
    },
    {
      latitude: 7.01845,
      longitude: 3.29255,
      name: "Ogun",
      users: 2000,
    },
    // ["Rivers", 10,
    // latitude :  "4.9979"
    // longitude:  "6.81969"],
    // ["Lagos", 11],
    // ["Abuja", 12],
    // ["Kaduna", 13],
    // ["Kano", 14],
    // ["Ondo", 15],
    // ["Oyo", 16],
    // ["Edo", 17],
  ];

  let names: number[] = [];
  stateData.map((geo) => {
    names.push(geo.latitude, geo.longitude);
  });

  // let numbers: number[] = [1, 2];
  let tuple: [number, number] = [names[0], names[1]];
  console.log("geo", tuple);

  return (
    <div>
      <ComposableMap
        projection="geoMercator"
        style={{ backgroundColor: "#fdfdfd" }}
        projectionConfig={{
          scale: 3500,
          center: [9, 9],
        }}
        fill="#FAEBF0"
        stroke="white"
        stroke-width={2}
      >
        {/* <ZoomableGroup center={[0, 0]}> */}
        <Geographies geography={geoUrl}>
          {(geographies) => {
            return (
              <>
                {geographies.geographies.map((geo) => {
                  const stateName = stateData.find(
                    (s) => s.name === geo.properties.name
                  );

                  // console.log("data", geo);
                  return (
                    <Geography
                      data-tooltip-id={stateName ? "my-tooltip" : ""}
                      key={geo.rsmKey}
                      geography={geo}
                      fill={stateName ? "#E085A3" : "#FAEBF0"}
                      // style={{
                      //   hover: {
                      //     fill: "#E085A3",
                      //   },
                      // }}
                      onMouseEnter={() => {
                        // const { NAME, POP_EST } = geo.properties;
                        console.log(geo.properties.name);

                        setTooltipContent(
                          geo.properties.name +
                            "\n" +
                            stateName?.users +
                            " Users"
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        hover: {
                          fill: stateName ? "#CC3366" : "",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#CC3366",
                          outline: "none",
                        },
                        default: {
                          outline: "none",
                        },
                      }}
                    />
                  );
                })}
                {/* {stateData.map((geo) => {
                  let names = [];
                  names.push(geo.latitude, geo.longitude);
                  console.log("geo", names);
                  let tupleN: [number, number] = [names[0], names[1]];

                  return (
                    <Marker coordinates={tupleN}>
                      <circle r={8} fill="#F53" />
                      <text
                        style={{
                          fill: "red",
                          strokeWidth: 0,
                        }}
                        textAnchor="middle"
                      >
                        {geo.name}
                      </text>
                    </Marker>
                  );
                })} */}

                {/* {geographies.geographies.map((geo) => {
                  const provinceCenter = geoCentroid(geo);
                
                  let customPlacement = [4.9979, 6.81969];
                  let tuplecustomPlacement: [number, number] = [
                    customPlacement[0],
                    customPlacement[1],
                  ];

                  const stateName = stateData.map((state) => {
                    console.log(state.name, geo.properties.name);
                    if (geo.properties.name == state.name) {
                      return state.name;
                    }
                  });

                  const stateName = stateData.forEach(([state, value]) => {
                    if (state == geo.properties.name) {
                      // console.log(`State: ${state}, Value: ${value}`);
                      return geoCentroid(geo);
                    }
                  });
                  console.log(stateName);

                  const stateName = sateData.map((state) => {
                    if ((geo.properties.name = state.)) {
                      console.log(geo);
                      return geoCentroid(geo);
                    }
                    return;
                  });
                  console.log("stateName", stateName[0]);

                  return (
                    <Marker
                      coordinates={
                        stateName == geo.properties.name
                          ? tuple
                          : provinceCenter
                      }
                    >
                      <circle r={8} fill="#F53" />
                      <text
                        style={{
                          fill:
                            stateName == geo.properties.name
                              ? "#016236"
                              : "#111217",
                        }}
                        textAnchor="middle"
                      >
                        
                        {stateName == geo.properties.name
                          ? geo.properties.name
                          : ""}
                      </text>
                    </Marker>
                  );
                })} */}
              </>
            );
            // return geographies.geographies.map((geo) => {
            //   return <Geography key={geo.rsmKey} geography={geo} />;
            // });
          }}
        </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  );
};

export default Map;
