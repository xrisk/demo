from flask import Flask, request

app = Flask(__name__)


@app.route("/api/set", methods=["POST"])
def recv():
    for k, v in request.form.items():
        print("Received", k, v)
    return "Ok"


if __name__ == "__main__":
    app.run("localhost", 5000)
