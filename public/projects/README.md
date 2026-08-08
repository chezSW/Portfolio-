# Project media

Keep assets grouped by project slug, for example:

```text
public/projects/
  thermal-analysis/
  manufacturing-fixtures/
  space-electronics-packaging/
  autonomous-kart-packaging/
  first-robotics/
```

Adding a file here does not publish it automatically. It must also be listed in
that project's `media` array with `public: true`. Leave uncertain or restricted
files outside this repository.
