import tensorflow as tf


# def convert_h5_to_json(h5_model_path, json_model_path) -> None:
#     model = tf.keras.models.load_model(h5_model_path)
#     model_json = model.to_json()
#     print('Working On it!......')
#     with open(json_model_path, 'w') as json_file:
#         json_file.write(model_json)
#     print('Write done')


# h5_model_path = 'models/model.h5'
# json_model_path = 'models/model.json'
# convert_h5_to_json(h5_model_path, json_model_path)


def save_model_for_tfjs(model, model_directory):
    # Save model architecture as JSON
    model_json = model.to_json()
    with open(f"{model_directory}/model.json", "w") as json_file:
        json_file.write(model_json)

    # Save model weights in the TensorFlow.js format
    tfjs_format_path = f"{model_directory}/tfjs_format"
    tf.saved_model.save(model, tfjs_format_path, signatures="serving")

    # Convert the TensorFlow.js format to model.bin and shard files
    converter = tf.compat.v1.lite.TFLiteConverter.from_saved_model(
        tfjs_format_path)
    converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS]
    tflite_model = converter.convert()
    with open(f"{model_directory}/model.bin", "wb") as bin_file:
        bin_file.write(tflite_model)


# Example usage
# Assuming you have a trained model called 'model' and a directory 'model_dir' to save the files
model_dir = 'models'
model = tf.keras.models.load_model('models/model.h5')
save_model_for_tfjs(model, model_dir)
