import { Margin, Padding } from "../shared.types";
import { spaces } from "../styles/styles";

const getPadding = (padding: Padding) => {
  let paddingValues = {};
  if (padding.pl)
    paddingValues = { ...paddingValues, paddingLeft: spaces[padding.pl] };
  if (padding.pt)
    paddingValues = { ...paddingValues, paddingTop: spaces[padding.pt] };
  if (padding.pr)
    paddingValues = { ...paddingValues, paddingRight: spaces[padding.pr] };
  if (padding.pb)
    paddingValues = { ...paddingValues, paddingBottom: spaces[padding.pb] };
  if (padding.px)
    paddingValues = { ...paddingValues, paddingHorizontal: spaces[padding.px] };
  if (padding.py)
    paddingValues = { ...paddingValues, paddingVertical: spaces[padding.py] };

  return paddingValues;
};

const getMargin = (margin: Margin) => {
  // TODO : If necessary, find a way to automate this.
  let marginValues = {};
  if (margin.ml)
    marginValues = { ...marginValues, marginLeft: spaces[margin.ml] };
  if (margin.mt)
    marginValues = { ...marginValues, marginTop: spaces[margin.mt] };
  if (margin.mr)
    marginValues = { ...marginValues, marginRight: spaces[margin.mr] };
  if (margin.mb)
    marginValues = { ...marginValues, marginBottom: spaces[margin.mb] };
  if (margin.mx)
    marginValues = { ...marginValues, marginHorizontal: spaces[margin.mx] };
  if (margin.my)
    marginValues = { ...marginValues, marginVertical: spaces[margin.my] };

  return marginValues;
};

export { getPadding, getMargin };
