import * as React from 'react';
import { Text, View, StyleSheet , Dimensions , TouchableHighlight } from 'react-native';




import Carousel from 'react-native-snap-carousel';
const itemWidth = 100;
const sliderWidth = Dimensions.get('window').width;

export default class  MyCarousel extends React.Component {

    constructor() {
        super();
        this.state = {
            entries: [
               {title:"fealling"},
               {title:"Video"},
               {title:"regular"},
               {title:"recipe"},
               {title:"event"},
            ],
        }

        let numColumns = 3;
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
               <TouchableHighlight>
                 <Text style={styles.title}>{ item.title }</Text>
               </TouchableHighlight>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              swipeThreshold={15}
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              sliderHeight={10}
              itemWidth={itemWidth}
            />
        );
    }
}


const styles = StyleSheet.create({
    slide: {
        flex: 1,
        borderColor: '#fff',
    },

})
