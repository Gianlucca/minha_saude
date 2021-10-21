import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Text } from 'react-native-paper';

export default function Vaccines() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				flexDirection: 'column',
				marginTop: StatusBar.currentHeight || 0,
			}}>
			<FlatList
				data={[
					{
						id: '0',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '1',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '2',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '3',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '4',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '5',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '6',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '7',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '8',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
					{
						id: '9',
						name: 'Covid-19',
						date: '18/10/2021',
						batch: 'PFIZER',
						address: 'postinho',
						details: 'é na sala 807',
					},
				]}
				renderItem={({ item }) => (
					<View
						style={{
							backgroundColor: '#9f9f9f',
							padding: 20,
							marginVertical: 8,
							marginHorizontal: 16,
						}}>
						<IconButton icon='needle' size={30} />
						<Text style={{ color: '#fff' }}>{item.date}</Text>
						<Text style={{ color: '#fff' }}>{item.address}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
			<IconButton
				onPress={() => console.log('Pressed')}
				icon='plus'
				size={30}
				style={{
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.2)',
					width: 100,
					height: 100,
					backgroundColor: '#fff',
					borderRadius: 100,
					alignSelf: 'flex-end',
					position: 'absolute',
					bottom: 15,
					right: 15,
				}}
			/>
		</SafeAreaView>
	);
}
