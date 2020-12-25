import React, {CSSProperties} from "react";
import PersonIcon from '../../../../../img/person.svg';

interface Props {
    image_url: string | null
}

const ActorPhoto = (props: Props) => {
    let style: CSSProperties

    const commonStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '6em',
        height: '6em',
        borderRadius: '50%'
    } as CSSProperties

    const normalStyle = {
        backgroundImage: `url(${props.image_url})`
    } as CSSProperties

    const emptyStyle = {
        backgroundImage: `url(${PersonIcon})`
    } as CSSProperties

    if (props.image_url == null) {
        style = emptyStyle;
    } else {
        style = normalStyle;
    }

    return(
        <div style={{...commonStyle, ...style}}/>
    );
}

export default ActorPhoto;