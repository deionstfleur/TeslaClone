import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';


const CarItem = (props) => {

  const {name, tagLine, image } = props.car;
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={image} 
        style={styles.image} />

          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagLine}</Text>
          </View>
      <View style={styles.buttonContainer}>
        <StyledButton 
        type="primary" 
        content={"Like"} 
        onPress={() => {
        console.warn(  "like complete")
        }}
        />

    <StyledButton 
        type="secondary" 
        content={"Send"} 
        onPress={() => {
        console.warn(  "send complete")
        }}
        />

      </View>
        </View>
    )
}

export default CarItem;
