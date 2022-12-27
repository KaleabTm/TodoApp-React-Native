import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const Header = ({handleClear}) => {
  return (
    <View style={styles.HeaderView}>
        <Text style={styles.HeaderTitle}>Todos</Text>
        <TouchableOpacity style={styles.HeaderButtom}
          onPress={handleClear}
        >
        <Entypo name='trash' size={25} color= "#b3cce6"/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    HeaderView: {
      paddingVertical: 10,  
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    HeaderTitle: {
      fontSize: 35,
      fontWeight: "bold",
      color:  "#66b3ff",
      letterSpacing: 2,
      fontStyle: "italic",  
    },
    HeaderButtom: {
      fontWeight: 'bold',
      color: "#b3cce6",  
    },
  });