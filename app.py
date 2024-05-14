from flask import Flask, request, jsonify, render_template
import datetime
import random

app = Flask(__name__)

# Dummy data for logs
def generate_dummy_logs():
    levels = ['info', 'error', 'success']
    messages = ['Inside the Search API', 'Failed to connect', 'User logged in']
    logs = []
    for _ in range(20):
        log = {
            'level': random.choice(levels),
            'log_string': random.choice(messages),
            'timestamp': datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ'),
            'metadata': {
                'source': 'log1.log'
            }
        }
        logs.append(log)
    return logs

# Store dummy logs
dummy_logs = generate_dummy_logs()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search_logs():
    data = request.get_json()
    level = data.get('level')
    message = data.get('message')
    startDate = data.get('startDate')
    endDate = data.get('endDate')

    filtered_logs = filter_logs(level, message, startDate, endDate)

    return jsonify({'logs': filtered_logs})

def filter_logs(level, message, startDate, endDate):
    filtered_logs = []
    for log in dummy_logs:
        if (not level or log['level'] == level) \
            and (not message or message in log['log_string']) \
            and (not startDate or log['timestamp'] >= startDate) \
            and (not endDate or log['timestamp'] <= endDate):
            filtered_logs.append(log)
    return filtered_logs

if __name__ == '__main__':
    app.run(debug=True)
