from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/xml', methods=['GET'])
def get_xml():
    # Here you would normally fetch and return XML data
    # For demonstration, return a simple XML string
    return "<note><to>User</to><from>Server B</from><message>Hello from XML!</message></note>", 200, {'Content-Type': 'text/xml'}

@app.route('/csv', methods=['GET'])
def get_csv():
    # Return CSV data
    return "id,name\n1,Server B", 200, {'Content-Type': 'text/csv'}

@app.route('/yaml', methods=['GET'])
def get_yaml():
    # Return YAML data
    return "greeting: Hello from YAML!", 200, {'Content-Type': 'text/plain'}

@app.route('/txt', methods=['GET'])
def get_txt():
    # Return text data
    return "Hello from TXT!", 200, {'Content-Type': 'text/plain'}

@app.route('/json', methods=['GET'])
def get_json():
    # Return JSON data
    return jsonify({"message": "Hello from JSON!"})

@app.route('/fetch-from-server-a/<data_type>', methods=['GET'])
def fetch_from_server_a(data_type):
    # Replace 'server_a_url' with the actual URL of Server A
    server_a_url = f'http://localhost:3000/{data_type}'
    response = requests.get(server_a_url)
    return response.content, response.status_code, response.headers.items()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
