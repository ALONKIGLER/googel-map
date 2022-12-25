import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

/**
 * @author
 * @function MapF
 **/

const ShowMap = (props) => {
  const [loadData, setLoadData] = useState([]);

  const containerStyle = {
    width: "500px",
    height: "500px",
    position: "relative",
  };

  useEffect(() => {
    setLoadData([
      {
        id: 36,
        date: "2022-01-13 09:57:08",
        name: "\u05d8\u05d5\u05dd \u05d9\u05d0\u05dd",
        foodtype: [
          {
            ID: 7,
            name: "\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3\u05d9",
            icon: null,
            overview: null,
            created: "2022-01-13 09:40:29",
          },
        ],
        slogan:
          "\u05d0\u05d5\u05db\u05dc \u05ea\u05d0\u05d9\u05dc\u05e0\u05d3\u05d9",
        location_name: "\u05e9\u05d3\u05d4 \u05e0\u05d7\u05de\u05d9\u05d4",
        logo: "https://my.foodtrack.co.il/media/tom-yam.png",
        latlng: "33.18771165444279,35.62324329205594",
        distance: 11802,
        overview: "",
        customer: 0,
        status: "running",
        phone: "054-305-5767",
        directions: "",
        hours: "",
        opennow: "0",
        accessiblity: "1",
        menu_image: "",
        waze: "",
        facebook: "https://www.facebook.com/--Tom-yum-112369212759555/",
        website: "",
        gallery: [
          {
            ID: "115",
            file_url: "https://my.foodtrack.co.il/media/tom-g1.jpg",
            name: "",
            project_id: "36",
            created: "2022-03-03 08:15:04",
          },
        ],
      },
      {
        id: 90,
        date: "2022-10-29 21:49:30",
        name: "\u05e7\u05e4\u05d4 \u05d0\u05d7\u05d5",
        foodtype: [
          {
            ID: 5,
            name: "\u05d0\u05d5\u05db\u05dc \u05d1\u05d9\u05ea\u05d9",
            icon: "homemade-food",
            overview: null,
            created: "2022-01-10 11:03:14",
          },
          {
            ID: 4,
            name: "\u05e2\u05d2\u05dc\u05d5\u05ea \u05e7\u05e4\u05d4",
            icon: "coffee",
            overview: "",
            created: "2022-01-10 11:03:08",
          },
          {
            ID: 21,
            name: "\u05e6\u05de\u05d7\u05d5\u05e0\u05d9",
            icon: "vegan",
            overview: null,
            created: "2022-01-14 17:58:57",
          },
        ],
        slogan: "\u05e7\u05e4\u05d4 \u05d5\u05de\u05d5\u05d6\u05d9\u05e7\u05d4",
        location_name: "\u05db\u05dc\u05d9\u05dc",
        logo: "https://my.foodtrack.co.il/media/achu-logo.jpeg",
        latlng: "32.0853,34.781769",
        distance: 11811,
        overview:
          "\u05e7\u05e4\u05d4 \u05d0\u05d7\u05d5 \u05e9\u05d5\u05db\u05df \u05d1\u05de\u05d8\u05e2 \u05d6\u05d9\u05ea\u05d9\u05dd \u05e2\u05ea\u05d9\u05e7 \u05d1\u05de\u05e8\u05db\u05d6 \u05d4\u05db\u05e4\u05e8 \u05d4\u05d0\u05e7\u05d5\u05dc\u05d5\u05d2\u05d9 \u05db\u05dc\u05d9\u05dc.",
        customer: 0,
        status: "running",
        phone: "050-243-3363",
        directions: "",
        hours: "",
        opennow: "0",
        accessiblity: "0",
        menu_image: "",
        waze: "",
        facebook: "https://www.facebook.com/achucafeclil",
        website: "",
        gallery: [
          {
            ID: "158",
            file_url: "https://my.foodtrack.co.il/media/achu-1.jpeg",
            name: "",
            project_id: "90",
            created: "2022-10-29 21:53:51",
          },
          {
            ID: "159",
            file_url: "https://my.foodtrack.co.il/media/achu-2.jpeg",
            name: "",
            project_id: "90",
            created: "2022-10-29 21:53:57",
          },
          {
            ID: "160",
            file_url: "https://my.foodtrack.co.il/media/achu-6.jpeg",
            name: "",
            project_id: "90",
            created: "2022-10-29 21:54:13",
          },
          {
            ID: "161",
            file_url: "https://my.foodtrack.co.il/media/achu-7.jpeg",
            name: "",
            project_id: "90",
            created: "2022-10-29 21:54:18",
          },
          {
            ID: "162",
            file_url: "https://my.foodtrack.co.il/media/achu-3.jpeg",
            name: "",
            project_id: "90",
            created: "2022-10-29 21:54:23",
          },
          {
            ID: "163",
            file_url: "https://my.foodtrack.co.il/media/achu-4.jpeg",
            name: "",
            project_id: "90",
            created: "2022-10-29 21:54:34",
          },
        ],
      },
      {
        id: 22,
        date: "2021-12-29 19:24:19",
        name: "Juciy",
        foodtype: [
          {
            ID: 3,
            name: "\u05e1\u05e0\u05d3\u05d1\u05d9\u05e6\u05f3\u05d9\u05dd",
            icon: "sandwiches",
            overview: null,
            created: "2022-01-10 11:03:06",
          },
          {
            ID: 4,
            name: "\u05e2\u05d2\u05dc\u05d5\u05ea \u05e7\u05e4\u05d4",
            icon: "coffee",
            overview: "",
            created: "2022-01-10 11:03:08",
          },
          {
            ID: 13,
            name: "\u05e7\u05d9\u05e0\u05d5\u05d7\u05d9\u05dd",
            icon: null,
            overview: null,
            created: "2022-01-13 09:52:31",
          },
        ],
        slogan:
          "\u05d1\u05e8 \u05de\u05d9\u05e6\u05d9\u05dd \u05d5\u05e9\u05d9\u05d9\u05e7\u05d9\u05dd",
        location_name:
          "\u05d8\u05d9\u05d9\u05dc\u05ea \u05d7\u05d9\u05e4\u05d4",
        logo: "https://my.foodtrack.co.il/media/Juciy-logo.jpg",
        latlng: "32.82634941888688, 34.95670223319461",
        distance: 11821,
        overview:
          "\u05d1\u05dc\u05d1 \u05d4\u05d8\u05d9\u05d9\u05dc\u05ea \u05d4\u05d7\u05d3\u05e9\u05d4 \u05e9\u05dc \u05d7\u05d9\u05e4\u05d4, \u05d1\u05d0\u05d7\u05ea \u05d4\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05d4\u05e9\u05dc\u05d5\u05d5\u05ea \u05d9\u05d5\u05ea\u05e8 \u05e9\u05dc \u05d4\u05e8\u05e6\u05d5\u05e2\u05d4, \u05e9\u05d5\u05db\u05df \u05dc\u05d5 \u05e4\u05d5\u05d3\u05d8\u05e8\u05d0\u05e7 \u05e1\u05e1\u05d2\u05d5\u05e0\u05d9 \u05d1\u05de\u05d9\u05d5\u05d7\u05d3 \u05d1\u05e9\u05dd \u05d2\u05f3\u05d5\u05d9\u05e1\u05d9.. \u05de\u05e7\u05d5\u05dd \u05de\u05e6\u05d5\u05d9\u05df \u05dc\u05e2\u05e6\u05d5\u05e8 \u05d5\u05dc\u05d4\u05ea\u05e8\u05e2\u05e0\u05df \u05d1\u05de\u05d9\u05e5 \u05e1\u05d7\u05d5\u05d8 \u05d8\u05d1\u05e2\u05d9, \u05e9\u05d9\u05d9\u05e7 \u05e1\u05e1\u05d2\u05d5\u05e0\u05d9, \u05e7\u05e4\u05d4, \u05db\u05e8\u05d9\u05db\u05d9\u05dd \u05d5\u05d0\u05e4\u05d9\u05dc\u05d5 \u05d5\u05d5\u05d0\u05e4\u05dc \u05d1\u05dc\u05d2\u05d9 \u05de\u05de\u05e9 \u05de\u05de\u05e9 \u05d8\u05e2\u05d9\u05dd.\n\n\u05d4\u05de\u05e7\u05d5\u05dd \u05e0\u05d2\u05d9\u05e9 \u05de\u05d0\u05d5\u05d3 \u05dc\u05db\u05e1\u05d0\u05d5\u05ea \u05d2\u05dc\u05d2\u05dc\u05d9\u05dd \u05d5\u05e2\u05d2\u05dc\u05d5\u05ea \u05ea\u05d9\u05e0\u05d5\u05e7 \u05d5\u05d4\u05e6\u05d5\u05d5\u05ea \u05de\u05db\u05d1\u05d3 \u05d5\u05de\u05e1\u05d9\u05d9\u05e2 \u05dc\u05de\u05d9 \u05e9\u05e6\u05e8\u05d9\u05da \u05e2\u05d6\u05e8\u05d4.",
        customer: 0,
        status: "running",
        phone: "054-473-8250",
        directions:
          "\u05e2\u05dc \u05d8\u05d9\u05d9\u05dc\u05ea \u05d7\u05d9\u05e4\u05d4 \u05e1\u05de\u05d5\u05da \u05dc\u05d1\u05e0\u05d9\u05d9\u05df \u05d7\u05e7\u05e8 \u05d9\u05de\u05d9\u05dd \u05d5\u05d0\u05d2\u05de\u05d9\u05dd.",
        hours: "",
        opennow: "0",
        accessiblity: "0",
        menu_image: "",
        waze: "",
        facebook:
          "https://www.facebook.com/people/Juicy-%D7%98%D7%99%D7%99%D7%9C%D7%AA-%D7%91%D7%AA-%D7%92%D7%9C%D7%99%D7%9D/100063798243251/",
        website: "",
        gallery: [
          {
            ID: "110",
            file_url: "https://my.foodtrack.co.il/media/juicy-gallery1.jpg",
            name: "",
            project_id: "22",
            created: "2022-03-03 08:09:07",
          },
          {
            ID: "133",
            file_url: "https://my.foodtrack.co.il/media/juicy-sl.jpg",
            name: "",
            project_id: "22",
            created: "2022-10-14 14:01:22",
          },
          {
            ID: "134",
            file_url: "https://my.foodtrack.co.il/media/juicy-2.jpeg",
            name: "",
            project_id: "22",
            created: "2022-10-14 14:04:03",
          },
        ],
      },
    ]);
  }, []);

  function getPosition(point) {
    const points = {
      lat: point.latlng.split(",")[0],
      lng: point.latlng.split(",")[1],
    };
    return points;
  }

  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={containerStyle}
        initialCenter={{
          lat: 32.0853,
          lng: 34.781769,
        }}
      >
        {loadData.map((wq, index) => (
          <Marker key={index} position={getPosition(wq)} />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB1m0RcRybMQrRG1lzhrlVzvN4mYOykV1M",
})(ShowMap);
