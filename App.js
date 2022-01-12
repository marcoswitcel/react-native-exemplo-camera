import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Modal, Image } from 'react-native';
// Font awesome no expo
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const camRef = useRef(null);
  const [ type, setType ] = useState(Camera.Constants.Type.back);
  const [ hasPermission, setHasPermission ] = useState(null);
  const [ capturedPhoto, setCapturedPhoto ] = useState(null);
  const [ open, setOpen ] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === 'granted');
    })()
  }, []);

  const takePicture = async () => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      // console.log(data);
      setOpen(true);
    }
  }

  if (hasPermission === null) {
    return <View />
  }
  
  if (hasPermission === false) {
    return <Text>Acesso negado</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.contentButton}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}
          >
            <FontAwesome name='exchange' size={23} color='red' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            <FontAwesome name='camera' size={23} color='white' />
          </TouchableOpacity>
        </View>
      </Camera>
      { capturedPhoto && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={open}
        >
          <View style={styles.contentModal}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setOpen(false)}>
              <FontAwesome name='close' size={50} color='white' />
            </TouchableOpacity>
            <Image style={styles.imgPhoto} source={{ uri: capturedPhoto }} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  contentButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  buttonFlip: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  buttonCamera: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20,
  },
  imgPhoto: {
    width: '100%',
    height: 400,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 2,
    margin: 10,
  },
});
