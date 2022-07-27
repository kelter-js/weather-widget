import React, { useState } from 'react';
import {
  TextLabel,
  TextLabelName,
  Input,
  PlaceList,
  Li,
  PlaceLoader
} from "./SearchBarStyles";
import axios from 'axios';
import { observer } from "mobx-react-lite";
import MainStore from '../../store/MainStore';

const SearchBar = observer(({
  label,
  onPlaceSelect,
  value,
  ...restProps
}) => {
  const [placeList, setPlaceList] = useState([]);
  const [loader, setLoader] = useState(false);

  const renderList = () => {
    if (placeList) {
      return placeList.map((item, index) => (
        <Li
          key={index}
          onClick={() => {
            onPlaceSelect(item);
            setPlaceList([]);
          }}>
          {item.address}
        </Li>
      ));
    }
  };

  const getPlaces = async (path) => {
    const possibleCities = await axios.get(`
    https://nominatim.openstreetmap.org/search?q=${path}&format=json&addressdetails=1&accept-language=ru-EN
    `);

    return possibleCities.data;
  };


  const fetchPlaces = async (e) => {
    return getPlaces(e.target.value).then((res) => {
      const arr = [];

      res.map((place) => {
        let name = place?.address?.town ?? place?.address?.city ?? place?.address?.hamlet;

        if (name && place?.address?.country) {
          arr.push({
            address: `${name}, ${place?.address?.country}`,
            lat: place.lat,
            lng: place.lon,
          });
        }
      });

      return arr.filter((place) =>
        place.address.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
  };

  const onPlaceChange = (e) => {
    const prevPlace = e.target.value;
    MainStore.setCity(e.target.value)

    setTimeout(() => {
      if (e.target.value === prevPlace) {
        setLoader(true);
        fetchPlaces(e)
          .then((list) => {
            setPlaceList(list);
          })
          .finally(() => setLoader(false));
      }
    }, 1000);
  };

  return (
    <TextLabel data-testid="input-place-component">
      <TextLabelName>{label}</TextLabelName>
      <Input value={value} onChange={onPlaceChange} {...restProps} />
      {loader && <PlaceLoader size={25} />}
      <PlaceList>
        {renderList()}
      </PlaceList>
    </TextLabel>
  );
});

export default SearchBar;