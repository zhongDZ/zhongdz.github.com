function Point(x, y)
{
    this.X = x;
    this.Y = y;
}

// class define
function SimpleRecognizer()
{
    this.points = [];
    this.result = "";
}

// be called in onTouchBegan
SimpleRecognizer.prototype.beginPoint = function(x, y) {
    this.points = [];
    this.result = "";
    this.points.push(new Point(x, y));
}

// be called in onTouchMoved
SimpleRecognizer.prototype.movePoint = function(x, y) {
    this.points.push(new Point(x, y));

    if (this.result == "not support") {
        return;
    }

    var newRtn = "";
    var len = this.points.length;
    var dx = this.points[len - 1].X - this.points[len - 2].X;
    var dy = this.points[len - 1].Y - this.points[len - 2].Y;

    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
            newRtn = "right";
        } else {
            newRtn = "left";
        }
    } else {
        if (dy > 0) {
            newRtn = "up";
        } else {
            newRtn = "down";
        }
    }

    // first set result
    if (this.result == "") {
        this.result = newRtn;
        return;
    }

    // if diretcory change, not support Recongnizer
    if (this.result != newRtn) {
        this.result = "not support";
    }
}

// be called in onTouchEnded
SimpleRecognizer.prototype.endPoint = function() {
    if (this.points.length < 3) {
        return "error";
    }
    return this.result;
}

SimpleRecognizer.prototype.getPoints = function() {
    return this.points;
}
