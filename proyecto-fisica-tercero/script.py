from flask import Flask, render_template, request
from file import cal_dist, cal_vi, calc_acel, calc_tiempo, calc_vf

app = Flask(__name__)

    




@app.route('/', methods=['GET', 'POST'])
def home():
    datos_a_ingresar = []
    aceleracion = request.form.get('aceleracion')
    tiempo = request.form.get('tiempo')
    velocidad_inicial = request.form.get('vi')
    velocidad_final = request.form.get('vf')
    if request.method == 'POST':
        datos_a_ingresar = {'aceleracion', 'tiempo', 'velocidad_inicial', 'velocidad_final'}.difference([aceleracion, tiempo, velocidad_inicial, velocidad_final])
        print(datos_a_ingresar)
    return render_template('home.html', datos_a_ingresar=datos_a_ingresar)

@app.route('/#calcular', methods=['GET'])
def calcular():
    aceleracion = request.form.get('aceleracion')
    tiempo = request.form.get('tiempo')
    velocidad_inicial = request.form.get('velocidad_inicial')
    velocidad_final = request.form.get('velocidad_final')
    if request.method == 'POST':
        
    return render_template('home.html', aceleracion=aceleracion, tiempo=tiempo, velocidad_final=velocidad_final, velocidad_inicial=velocidad_inicial, distancia=distancia)

if __name__ == '__main__':
    app.run(debug=True)
