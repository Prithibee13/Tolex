import { FlatList, StyleSheet, View } from 'react-native';
import app from '../../firebase.init';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from 'react';
import Product from './Product';
import LottieView from 'lottie-react-native';
const Products = () => {

  const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'watches'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) {
    return <LottieView style={styles.anmStyle} source={require("../../assets/Animation - 1724413093939.json")} autoPlay loop></LottieView>
  }


  /* value?.docs.forEach(doc => console.log(JSON.stringify(doc.data()))) 
 
 */
  return (
    <View style={styles.productContainer}>
      {
        value?.docs.map(doc => <Product key={doc.data().id} items={doc.data()}></Product>)
      }
    </View>
  )
}


export default Products


const styles = StyleSheet.create({

  productContainer : {
    flex : 1,
    alignItems : 'center',
    marginVertical:"20%"
  },
  anmStyle: {
    flex: 1,
    width: 200,
    height: 200
  },
})