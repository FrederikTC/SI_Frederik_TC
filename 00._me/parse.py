# Mit forsøg på at parse i python
def parse_csv(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()
        header = lines[0].strip().split(',')
        data = [dict(zip(header, line.strip().split(','))) for line in lines[1:]]
        print(data)

def parse_json(filename):
    with open(filename, 'r') as file:
        data = file.read()
        print(data)
        
def parse_txt(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()
        header = lines[0].strip().split(',')
        data = [dict(zip(header, line.strip().split(','))) for line in lines[1:]]
        print(data)
        
def parse_xml(filename):
    with open(filename, 'r') as file:
        import xml.etree.ElementTree as ET
        tree = ET.parse(file)
        root = tree.getroot()
        data = []
        for person in root.findall('person'):
            item = {}
            for child in person:
                item[child.tag] = child.text
            data.append(item)
        print(data)
        
def parse_yaml(filename):
    with open(filename, 'r') as file:
        data = file.read()
        print(data)

csv_file = 'me.csv'
json_file = 'me.json'
yaml_file = 'me.yaml'
xml_file = 'me.xml'
txt_file = 'me.txt'


parse_csv(csv_file)
parse_json(json_file)
parse_yaml(yaml_file)
parse_xml(xml_file)
parse_txt(txt_file)
