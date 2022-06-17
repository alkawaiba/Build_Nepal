def get_striped_text(text, n=15, /):
    # gets striped version of the given text
    striped_text = text[0:n]
    return striped_text if len(text) < 15 else f"{striped_text}..."