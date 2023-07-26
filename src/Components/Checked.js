import React, { Component } from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
class Checked extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={HeadStyles.header}>
                    <Text style={HeadStyles.title}>To-Do-List</Text>
                    <Text style={{color: "white"}}>Completed Task</Text>
                </View>
                <View style={MainStyles.main}>
                    <View style={MainStyles.parent}>
                        <View style={MainStyles.child}>
                            <View style={MainStyles.history}>
                                <Text style={MainStyles.task}>Task 5</Text>
                                <Text style={MainStyles.time}>3 hours ago</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={MainStyles.delete}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={MainStyles.parent}>
                        <View style={MainStyles.child}>
                            <View style={MainStyles.history}>
                                <Text style={MainStyles.task}>Task 4</Text>
                                <Text style={MainStyles.time}>1 hour ago</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={MainStyles.delete}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        padding: 5,
        backgroundColor: "#282828"
    },
})

const HeadStyles = StyleSheet.create({
    header:{
        width: "100%",
        height: "10%",
        borderColor: "white",
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderColor: "white",
        borderBottomWidth: 3
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})
const MainStyles = StyleSheet.create({
    main:{
        width: "100%",
        height: "68%",
        padding: 5,
        alignItems: "center",
        marginTop: 20
    },
    parent:{
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    child:{
        flexDirection: "row",
        backgroundColor: "rgb(0,225,0)",
        width: "100%",
        height: "80%",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10
    },
    task:{
        color: "black",
        fontSize: 30
    },
    time:{
        color: "black",
        fontSize: 10
    },
    history:{
        justifyContent:"center",
        alignItems:"center",
        padding: 10,
    },
    delete:{
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default Checked;