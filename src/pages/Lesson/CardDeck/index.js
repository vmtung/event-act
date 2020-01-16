import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import InfoCard from './InfoCard'
import DeckTemplate from './DeckTemplate'

const CardDeck = ({ data, classes, next, prev }) => {
  const { cards, id } = data
  return (
    <DeckTemplate
      keyExtractor={(c, i) => id + '-' + i}
      cards={cards}
      prev={prev}
      dataRenderer={(data, props) => {
        const { desc = [], button } = data
        const texts = Array.isArray(desc) ? desc : [desc]

        return (
          <>
            {texts.map((t, index) => (
              <p key={'card-text-' + props.key + '-' + index}>{t}</p>
            ))}
            {button ? (
              <Button
                variant="contained"
                style={{
                  padding: 10,
                  border: '1px solid black',
                  borderRadius: 5,
                }}
                onClick={!props.disabled ? props.slideOut : undefined}
              >
                {button}
              </Button>
            ) : (
              false
            )}
          </>
        )
      }}
      next={next}
    />
  )
}

export default CardDeck