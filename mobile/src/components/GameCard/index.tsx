import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';
export interface GameCardProps {
  id: String;
  name: String;
  ads: String;
  cover: ImageSourcePropType
}
interface Props extends TouchableOpacityProps{
  data: GameCardProps;
}
export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text >{data.name}</Text>
          <Text >{data.ads} anúncios</Text>
        </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}