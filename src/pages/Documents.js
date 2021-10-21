import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Text } from 'react-native-paper';

export default function Documents() {
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
						file: 'image.jpg',
						title: 'exame raio x',
						date: '12/12/2020',
						category: 'raio x',
						details: 'aquele raio x la',
					},
					{
						id: '1',
						file: 'image.jpg',
						title: 'exame raio x',
						date: '12/12/2020',
						category: 'raio x',
						details: 'aquele raio x la',
					},
					{
						id: '2',
						file: 'image.jpg',
						title: 'exame raio x',
						date: '12/12/2020',
						category: 'raio x',
						details: 'aquele raio x la',
					},
					{
						id: '3',
						file: 'image.jpg',
						title: 'exame raio x',
						date: '12/12/2020',
						category: 'raio x',
						details: 'aquele raio x la',
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
						<IconButton icon='file' size={30} />
						<Text style={{ color: '#fff' }}>{item.title}</Text>
						<Text style={{ color: '#fff' }}>{item.category}</Text>
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
