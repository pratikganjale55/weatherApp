import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types";

const WeatherDisplay  = ({ city, temperature, description }) => {
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temperatureStyle}>{temperature}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
    </View>
    </>
  )
}

WeatherDisplay.propTypes = {
    city :  PropTypes.string.isRequired ,
    temperature : PropTypes.string.isRequired ,
    description : PropTypes.string.isRequired ,
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    city: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    temperatureStyle: {
      fontSize: 18,
    },
    descriptionStyle: {
      fontSize: 16,
    },
  });
  

export default WeatherDisplay 
