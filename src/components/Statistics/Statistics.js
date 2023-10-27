import PropTypes from 'prop-types';
import { generateColor } from 'components/random-color';
import {StatisticSection, StatsList, StatsItem, Title, Label, Percentage} from "./Statistics.styled"

export const Statistics = ({title, stats }) => {
    return (
        <StatisticSection>
            {title && (<Title>{title}</Title>)}
            <StatsList>
{stats.map(item => (<StatsItem key={item.id} style={{backgroundColor: generateColor() }}>
                    <Label>{item.label} </Label>
                    <Percentage>{`${item.percentage} %`}</Percentage>
    </StatsItem>) )} 
  </StatsList>
</StatisticSection>
    )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};




