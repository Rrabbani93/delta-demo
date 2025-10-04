def clean_text(text):
    lines = [line.strip() for line in text.strip().split('\n') if line.strip()]
    cleaned = []
    i = 0

    while i < len(lines):
        current = lines[i]
        next_line = lines[i+1] if i+1 < len(lines) else None

        if next_line and current == next_line:
            i += 2  # Skip duplicate and its next
        else:
            cleaned.append(current)
            i += 1

    return '\n'.join(cleaned)

# Example usage
raw_text=""" hi
hi
so
so
"""
corrected_text = clean_text(raw_text)
print(corrected_text)