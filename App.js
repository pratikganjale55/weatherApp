import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CitySelector from "./components/CitySelector ";
import WeatherDisplay from "./components/WeatherDisplay ";

const weatherData = {
  London: { temperature: "15°C", description: "Cloudy" },
  "New York": { temperature: "22°C", description: "Sunny" },
  Tokyo: { temperature: "18°C", description: "Rainy" },
};

export default function App() {
  const [selectedCity, setSelectedCity] = useState(Object.keys(weatherData)[0]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  const { temperature, description } = weatherData[selectedCity];
  console.log("temperature",temperature)
  return (
    <View style={styles.container}>
      <CitySelector
        onCityChange={handleCityChange}
        cities={Object.keys(weatherData)}
      />
      <WeatherDisplay
        city={selectedCity}
        temperature={temperature}
        description={description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEDF7",
    alignItems: "center",
    justifyContent: "center",
  },
});
