import { NextFunction, Request, Response } from 'express'
import { getMockRes } from '../../types/test/mock-response'

import { getMenu } from './menu.service'
const MenuSchema = require('../../schema/menu/MenuSchema')
//jest.mock("./menu.service");

const Menu = [
  {
    _id: '6217dfbc071dd40058ac96f1',
    menuId: 1001,
    menuName: 'HOME',
    menuLabel: 'Home',
    childMenu: [],
    menuPath: '/'
  },
  {
    _id: '6217e04f071dd40058ac96f2',
    menuId: 1002,
    menuName: 'SIGNIN',
    menuLabel: 'Sign In',
    childMenu: [],
    menuPath: '/sign-in'
  }
]

describe('Menu service tests', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    jest.resetAllMocks()
    mockRequest = {}
    mockResponse = getMockRes()
  })

  xit('returns menu with response 200', async () => {
    MenuSchema.find = await jest.fn().mockResolvedValue(Menu)
    const menu = await MenuSchema.find({})
    expect(menu).toBe(Menu)

    await getMenu(mockRequest as Request, mockResponse as Response)
    const expectedResp = {
      success: true,
      data: menu,
      message: 'Menu List'
    }
    expect(mockResponse.status).toHaveBeenCalledWith(200)
    expect(mockResponse.json).toHaveBeenCalledWith(expectedResp)
  })

  /*it("returns error with response 500", async () => {
    MenuSchema.find = await jest.fn().mockResolvedValue(Menu);
    const menu = await MenuSchema.find({});
    expect(menu).toBe(Menu);

    await getMenu(mockRequest as Request, mockResponse as Response);
    const expectedResp = {
      success: false,
      message: "Error in Menu Query",
    };
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith(expectedResp);
  });*/
})
