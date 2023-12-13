1. show the total bet
2. get an idea of layout
3. double check logic
4. consider changing gamestate
   - the playerCards['player-cards'] thing is a little weird
   - this can probably be achieved with a loop (while playerHands)
   - abstract player hand completion away from the rest of the game

- name: super
- login: super
- why can't admin see the other models?

plotly stuff

# myapp/views.py

from django.shortcuts import render
import plotly.express as px
from django.http import HttpResponse
from plotly.offline import plot

def heatmap(request): # Example data (replace this with your own dataset)
data = {
'x': [1, 1, 2, 2, 3, 3],
'y': [1, 2, 1, 2, 1, 2],
'value': [10, 15, 13, 17, 14, 19]
}

    # Create a Plotly heatmap
    fig = px.scatter(data, x='x', y='y', size='value', color='value', size_max=30)

    # Convert the Plotly figure to HTML
    plot_html = plot(fig, output_type='div')

    return render(request, 'heatmap.html', {'plot_html': plot_html})
