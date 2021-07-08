// Basic Layout

import React from 'react'
// To add widget
import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView, TextInput } from 'react-native'
// Make sure you add folder in index
import Dog from './assets/dog.jpg'

const BasicLayout = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.sample_title}>Sample 
                    <Text style={{color: 'red'}} > Basic </Text>
                </Text>

                <Text style={another.another_title} >Simple Layout</Text>

                <View style={styles.sample_view}>
                    <Image
                        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                        style={{ width: 100, height: 100 }}
                    />

                    <Image
                        source={Dog}
                        style={styles.sample_image}
                    />
                </View>

            {/* Flex Box Horizontal (Need flex direction)*/}
                <View style={styles.sample_view_1}>
                    <View style={styles.sample_flex_1} />
                    <View style={styles.sample_flex_2} />
                    <View style={styles.sample_flex_3} />
                </View>

            {/* Flex Box Vertical (Need flex direction column or no using flex direction)*/}
            <View style={styles.sample_view_2}>
                    <View style={styles.sample_flex_1} />
                    <View style={styles.sample_flex_2} />
                    <View style={styles.sample_flex_3} />
                </View>

                <TextInput
                    placeholder = 'You can type in here'
                    style={styles.sample_input_text}
                    maxLength = {5}
                />

                <Text style={styles.sample_scroll}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
        </ScrollView>
        </SafeAreaView>
    );
}

export default BasicLayout

const another = StyleSheet.create({
    another_title:
    {
        color: "#61dafb",
        fontSize: 30,
        marginBottom: 36,
        textAlign: 'center'
    }
});

const styles = StyleSheet.create({
    sample_title:
    {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

    sample_view:
    {
        flexDirection: 'row',
        // move item vertical
        alignItems: 'center'
    },

    sample_view_1:
    {
        flexDirection: 'row',
        // move item horizontal
        justifyContent: 'center'
    },

    sample_view_2:
    {
        flexDirection: 'column-reverse'
    },

    sample_flex_1:
    {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        margin: 10
    },

    sample_flex_2:
    {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        margin: 10
    },

    sample_flex_3:
    {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        margin: 10
    },

    sample_image:
    {
        width: 100,
        height: 100,
        margin: 20 
    }, 

    sample_input_text:
    {
        height: 40,
        borderColor: 'gray',
        borderWidth: 5,
        textAlign: 'center'
    },

    sample_scroll:
    {
        textAlign: 'justify',
        fontSize: 42,
        backgroundColor: 'pink'
    }
});
