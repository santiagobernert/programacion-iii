from flask import Flask, render_template, request
from file import cal_dist, calc_vi, calc_acel, calc_tiempo, calc_vf

app = Flask(__name__)

    




@app.route('/', methods=['GET', 'POST'])
def home():
    aceleracion = 0
    tiempo = 0
    distancia = 0
    velocidad_inicial = 0
    velocidad_final = 0
    if request.method == 'POST':
        aceleracion = request.form.get('aceleracion')
        tiempo = request.form.get('tiempo')
        velocidad_inicial = request.form.get('velocidad_inicial')
        velocidad_final = request.form.get('velocidad_final')
        if not aceleracion:
            aceleracion = calc_acel(int(velocidad_final), int(velocidad_inicial), int(tiempo))
        if not tiempo:
            tiempo = calc_tiempo(int(velocidad_final), int(velocidad_inicial), int(aceleracion))
        if not velocidad_inicial:
            velocidad_inicial = calc_vi(int(velocidad_final), int(aceleracion), int(tiempo))
        if not velocidad_final:
            velocidad_final = calc_vf(int(aceleracion), int(tiempo), int(velocidad_inicial))
        distancia = cal_dist(int(velocidad_inicial), int(tiempo), int(aceleracion))
        
    return render_template('home.html', aceleracion=aceleracion, tiempo=tiempo, velocidad_final=velocidad_final, velocidad_inicial=velocidad_inicial, distancia=distancia)

if __name__ == '__main__':
    app.run(debug=True)
