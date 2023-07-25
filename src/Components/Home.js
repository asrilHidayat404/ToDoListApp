import React, { Component } from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerT}>What are Your Activities Today?</Text>
                </View>

                <View>
                    <View style={styles.toDo}>
                        <Text style={styles.text}>Text</Text>
                        <TouchableOpacity>
                            <View style={styles.delete}>
                                <Text style={styles.deleteX}>X</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.addParent}>
                    <Text style={styles.addActivity}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        paddingTop: 20,
        flex: 1,
        alignItems: "center",
        position: "relative",
    },
    toDo:{
        width: 240,
        height:40,
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    text:{
        color: "blue"
    },
    delete:{
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteX:{
        fontSize: 20,
        fontWeight: "bold"
    },
    addParent:{
        position: "absolute",
        bottom: 10,
    },
    addActivity:{
        width: 40,
        height: 40,
        textAlign: "center",
        lineHeight: 40,
        fontSize: 30,
        borderRadius: 50,
        color: "white",
        fontWeight: "bold",
        backgroundColor: "green"
    },
    header:{
        margin: 20,
    },
    headerT:{
        fontSize: 15,
        color: "blue",
    }
})

export default Home;

