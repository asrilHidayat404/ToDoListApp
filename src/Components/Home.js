import React, { Component } from 'react'
import {View,Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={HeadStyles.header}>
                    <Text style={HeadStyles.title}>To-Do-List</Text>
                    <Text style={{color: "white"}}>Note Your Activities!</Text>
                </View>
                <View style={MainStyles.main}>
                    <View style={MainStyles.parent}>
                        <View style={MainStyles.number}>
                            <Text style={MainStyles.numberT}>1</Text>
                        </View>
                        <View style={MainStyles.child}>
                            <Text style={MainStyles.task}>Task 1</Text>
                            <TouchableOpacity>
                                <Text style={MainStyles.delete}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={MainStyles.parent}>
                        <View style={MainStyles.number}>
                            <Text style={MainStyles.numberT}>2</Text>
                        </View>
                        <View style={MainStyles.child}>
                            <Text style={MainStyles.task}>Task 2</Text>
                            <TouchableOpacity>
                                <Text style={MainStyles.delete}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={MainStyles.parent}>
                        <View style={MainStyles.number}>
                            <Text style={MainStyles.numberT}>3</Text>
                        </View>
                        <View style={MainStyles.child}>
                            <Text style={MainStyles.task}>Task 3</Text>
                            <TouchableOpacity>
                                <Text style={MainStyles.delete}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={FootStyles.foot}>
                    <View style={FootStyles.input}>
                        <TextInput
                            style={FootStyles.inputText}
                            placeholder='Add Task...'
                        />
                    </View>
                    <TouchableOpacity style={FootStyles.parentAdd}>
                        <Text style={FootStyles.add}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
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
        alignItems: "center"
    },
    parent:{
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    number:{
        backgroundColor: "violet",
        width: "20%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    numberT:{
        color: "white",
        fontSize: 25,
    },
    child:{
        flexDirection: "row",
        backgroundColor: "violet",
        width: "70%",
        height: "80%",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10
    },
    task:{
        color: "white",
        fontSize: 20
    },
    delete:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})
const FootStyles = StyleSheet.create({
    foot:{
        width: "100%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    parentAdd:{
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    add:{
        fontWeight: "bold",
        fontSize: 25,
        color: "black"
    },
    input:{
        width: "70%",
    },
    inputText:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:"white",
        borderRadius: 10
    }
})

export default Home;

