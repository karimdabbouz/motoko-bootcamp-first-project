actor {
    public func gree(name : Text) : async Text {
        return ("Hello" # name # "!");
    };
}