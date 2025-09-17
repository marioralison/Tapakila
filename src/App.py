#from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_cors import CORS

from PIL import Image
import io, base64
from pyzbar.pyzbar import decode

app = Flask(__name__)
CORS(app)

@app.route('/scan', methods=['POST'])
def scan_qr():
    try:
        data = request.json['image']  # base64 envoyé par le front
        image_data = base64.b64decode(data.split(",")[1])
        image = Image.open(io.BytesIO(image_data))

        decoded_objects = decode(image)
        if not decoded_objects:
            return jsonify({"status": "erreur", "message": "Aucun QR détecté"})

        results = [obj.data.decode("utf-8") for obj in decoded_objects]
        return jsonify({"status": "ok", "codes": results})

    except Exception as e:
        return jsonify({"status": "erreur", "message": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
