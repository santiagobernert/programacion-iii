from xml.dom.minidom import Element
from file import cal_dist

etapas = Element('etapas').element.value
tiempo = Element('tiempo').element.value
aceleracion = Element('aceleracion').element.value
aceleracion_no = Element('aceleracion-no').element.value
aceleracion_si = Element('aceleracion-si').element.value
velocidad_inicial = Element('velocidad_inicial').element.value
velocidad_inicial_no = Element('velocidad-inicial-no').element.value
velocidad_inicial_si = Element('velocidad-inicial-si').element.value
velocidad_final = Element('velocidad_final').element.value
velocidad_final_no = Element('velocidad-final-no').element.value
velocidad_final_si = Element('velocidad-final-si').element.value

resp_velocidad_inicial = Element('resp-velocidad-inicial').element.value
resp_velocidad_final = Element('resp-velocidad-final').element.value
resp_aceleracion = Element('resp-aceleracion').element.value
resp_tiempo = Element('resp-tiempo').element.value
resp_distancia = Element('resp-distancia').element.value

distancia = cal_dist(velocidad_inicial, tiempo, aceleracion)

