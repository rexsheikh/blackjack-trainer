1. show total bet
2. color scheme
   - background
   - player info
   - borders
3. ensure points are logging correctly
   - then build circular progress bar or points/threshold for next rank
4. build a test suite to eval different conditions
5. end animation:
   - show points and dollars and rank increase
6. plotly and stats
   - heatmap
   - streak

mvp

- on dealing blackjack, show cards and reset (rearrange call structure)
- strat chart checkout

  - player initial blackjack (x)
  - dealer initial blackjack (x)
  - initial push (x)

  - eval hand does not take into account hard sum ace.
  - verify correct charts are being used and correct responses logged

- plotly heatmap for each hand type
- modal or something to show the strat charts while playing
- end game animations

bonus

- game flow
  - better delays
  - show cash or points incrementing
- rank, points, progress bar
- conditional endstate colors/animations
- bugs
  - split evaluation
    - show which hand is being evaluated, then update the endstate display according for each.
    - extra split div needs to be deleted on reset
