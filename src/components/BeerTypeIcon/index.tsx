import SportsBar from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import RoomIcon from '@mui/icons-material/Room';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BusinessIcon from '@mui/icons-material/Business';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import { TYPE } from '../../types';
import { SvgIconTypeMap } from '@mui/material';
import { CommonProps, DefaultComponentProps } from '@mui/material/OverridableComponent';

interface TypeProps {
    brewery_type: TYPE;
}

const BeerTypeIcon = ( props  : TypeProps & DefaultComponentProps<SvgIconTypeMap<{}, "svg">>) => {

    const getIconByType = (breweryType: TYPE, className?: CommonProps['className']) => {
        switch (breweryType.toLowerCase()) {
          case 'micro':
            return <SportsBar classes={{ root: props.className }} />;
          case 'nano':
            return <WineBarIcon classes={{ root: props.className }} />;
          case 'regional':
            return <RoomIcon classes={{ root: props.className }} />;
          case 'brewpub':
            return <LocalBarIcon classes={{ root: props.className }} />;
          case 'large':
            return <ApartmentIcon classes={{ root: props.className }} />;
          case 'planning':
            return <EventAvailableIcon classes={{ root: props.className }} />;
          case 'bar':
            return <LocalBarIcon classes={{ root: props.className }} />;
          case 'contract':
            return <HowToVoteIcon classes={{ root: props.className }} />;
          case 'proprietor':
            return <BusinessIcon classes={{ root: props.className }} />;
          case 'closed':
            return <ClosedCaptionIcon classes={{ root: props.className }} />;
          default:
            return null;
        }
    }
  return (
    <>
      {getIconByType(props.brewery_type, props.className)} 
    </>
  );
};

export default BeerTypeIcon;
