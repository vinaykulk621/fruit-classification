import tensorflow as tf


def convert_h5_to_json(h5_model_path, json_model_path) -> None:
    model = tf.keras.models.load_model(h5_model_path)
    model_json = model.to_json()
    print('Working On it!......')
    with open(json_model_path, 'w') as json_file:
        json_file.write(model_json)
    print('Write done')


h5_model_path = 'model/model.h5'
json_model_path = 'models/model.json'
convert_h5_to_json(h5_model_path, json_model_path)
