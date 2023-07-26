import React, { Component } from 'react'
import {View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={HeadStyles.header}>
                    <Text style={HeadStyles.title}>To-Do-List</Text>
                    <Text style={{color: "white"}}>About</Text>
                </View>
                <View style={MainStyles.main}>
                    <View style={MainStyles.parent}>
                        <Text style={{marginBottom: 30}}>Selamat datang di Aplikasi To-Do List!</Text>

                        <Text>Versi: 1.0.0</Text>

                        <Text style={{marginBottom: 30}}>Pengembang: 
                            <Text style={{fontWeight:"bold"}}> Asril Hidayat</Text>
                        </Text>

                        <Text>Deskripsi Aplikasi:</Text>

                        <Text style={{marginBottom: 30, textAlign:"justify"}}>Aplikasi To-Do List dirancang untuk membantu Anda mengatur tugas-tugas harian Anda dengan mudah. Tambahkan tugas, tandai sebagai selesai, dan kelola prioritas dengan cepat.</Text>

                        <View style={{marginBottom: 30}}>
                            <Text>Fitur Utama:</Text>
                            <Text> - Tambahkan tugas baru</Text>
                            <Text> - Tandai tugas sebagai selesai</Text>
                            <Text> - Hapus tugas yang sudah selesai</Text>
                        </View>

                        <View style={{marginBottom: 30}}>
                            <Text>Kontak:</Text>
                            <Text style={{textAlign: "justify"}}>Kami senang mendengar masukan dan saran dari Anda. Jika Anda memiliki pertanyaan atau ingin memberi umpan balik, silakan hubungi kami: </Text>
                            <Text> Email: 
                                <Text style={{fontWeight: "bold"}}> asril.hidayat200@gmail.com</Text>
                            </Text>
                            <Text> WhatsApp: 
                                <Text style={{fontWeight: "bold"}}> 0812 4935 6051</Text>
                            </Text>
                        </View>

                        <Text>Hak Cipta:</Text>
                        <Text style={{marginBottom: 30, textAlign: "justify"}}>Aplikasi ini dilindungi oleh undang-undang hak cipta. Seluruh hak cipta dilindungi oleh Pengembang.</Text>

                        <Text style={{marginBottom: 50, textAlign: "center", fontWeight: "bold", fontSize: 17}}>Terima kasih telah menggunakan aplikasi To-Do-List kami!</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        width: "100%",
        position: "relative",
        padding: 5,
        backgroundColor: "#282828",
        flex: 1
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
        padding: 8,
        // alignItems: "center",
        marginTop: 20,
        backgroundColor: "white",
    },
    parent:{
        width: "100%",
        flexDirection: "column",
    }
})

export default About;